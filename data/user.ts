import { db } from "@/lib/db";
import { ExtendedUser } from "@/next-auth";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });

    return user;
  } catch {
    return null;
  }
};

export const getUserData = async ({
  id,
  email,
  firstName,
  lastName,
  role,
  ssn,
  state,
  city,
}: ExtendedUser) => {
  try {
    const user = await db.user.findFirst({
      where: { firstName, lastName, email, role, ssn, state, city },
    });

    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } });

    return user;
  } catch {
    return null;
  }
};
