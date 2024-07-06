"use server";


import { auth } from "@/auth";
import { db } from "./db";
export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};

export const currentRole = async () => {
  const session = await auth();

  return session?.user?.role;
};

export const getAllUsers = async () => {
  const session = await auth();

  if (!session) {
    return []; // Return an empty array if there is no session
  }

  try {
    const users = await db.user.findMany(); // Fetch all users using Prisma
    return users;
  } catch (error) {
    console.error("Error fetching all users:", error);
    throw error;
  }
};
