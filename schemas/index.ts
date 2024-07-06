import { UserRole } from "@prisma/client";
import { z } from "zod";

export const SettingsSchema = z
  .object({
    firstName: z.optional(z.string()),
    lastName: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string()),
    newPassword: z.optional(z.string()),
  })

  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "New password is required",
      path: ["newPassword"],
    }
  )

  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: "password is required",
      path: ["password"],
    }
  );

export const NewPasswordSchema = z.object({
  password: z.string().min(6, { message: "Minimum 6 characters required" }),
});

export const ResetSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
  address1: z.string().max(50),
  city: z.string().max(50),
  state: z.string().min(2).max(2),
  postalCode: z.string().min(3).max(6),
  dateOfBirth: z.string().min(3),
  ssn: z.string().min(3),
});
