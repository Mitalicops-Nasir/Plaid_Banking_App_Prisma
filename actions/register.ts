"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";
import { createDwollaCustomer } from "./banking-functionality/dwolla.actions";
import { extractCustomerIdFromUrl } from "@/lib/utils";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const {
    email,
    password,
    firstName,
    lastName,
    ssn,
    state,
    city,
    postalCode,
    address1,
    dateOfBirth,
  } = validatedFields.data;
  // create dwolla customer
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  const formattedDateOfBirth = new Date(dateOfBirth)
    .toISOString()
    .split("T")[0];

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  if (password.length < 6) {
    return { error: "Password must be at least 6 characters long" };
  }

  // Create the user in the database
  const newUser = await db.user.create({
    data: {
      firstName,
      lastName,
      email,
      password: hashedPassword,
      ssn,
      state,
      city,
      postalCode,
      address1,
      dateOfBirth,
    },
  });

  // Create Dwolla customer
  const dwollaCustomerUrl = await createDwollaCustomer({
    firstName,
    lastName,
    email,
    ssn,
    address1,
    city,
    state,
    postalCode,
    dateOfBirth: formattedDateOfBirth,
    type: "personal",
  });

  if (!dwollaCustomerUrl) {
    console.error("Dwolla customer URL is null or undefined");
    throw new Error("Error creating Dwolla customer");
  }
  const dwollaCustomerId = extractCustomerIdFromUrl(dwollaCustomerUrl);

  // Update the user with Dwolla customer details
  await db.user.update({
    where: { id: newUser.id },
    data: {
      dwollaCustomerUrl,
      dwollaCustomerId,
    },
  });

  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: "User Created!" };
};
