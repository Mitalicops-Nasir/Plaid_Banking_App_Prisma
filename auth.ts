import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { getUserById } from "./data/user";
import { db } from "@/lib/db";
import { UserRole } from "@prisma/client";
import authConfig from "@/auth.config";

import { getTwoFactorConfirmationByUserId } from "./data/two-factor-confirmation";
import { getAccountByUserId } from "./data/account";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      //Allow OAuth without email verification
      if (account?.provider !== "credentials") return true;

      const existingUser = await getUserById(user.id);

      //prevent sign in without email verfication
      if (!existingUser?.emailVerified) return false;

      if (existingUser.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
          existingUser.id
        );

        //if no image for existinguser then update a image for it
        if (!existingUser.image) {
          await db.user.update({
            where: { id: user.id },
            data: { image: user?.image },
          });
        }

        console.log({ twoFactorConfirmation });

        if (!twoFactorConfirmation) return false;

        //delete two factor confirmation for next sign in
        await db.twoFactorConfirmation.delete({
          where: { id: twoFactorConfirmation.id },
        });
      }

      return true;
    },

    async session({ token, session }) {
      console.log({ sessionToken: token });
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      if (session.user) {
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
      }

      if (session.user) {
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
        session.user.email = token.email as string;
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
        session.user.id = token.sub as string;
        session.user.isOAuth = token.isOAuth as boolean;
        session.user.ssn = token.ssn as string;
        session.user.city = token.city as string;
        session.user.dateOfBirth = token.dateOfBirth as string;
        session.user.dwollaCustomerId = token.dwollaCustomerId as string;
        session.user.dwollaCustomerUrl = token.dwollaCustomerUrl as string;
        session.user.postalCode = token.postalCode as string;
        session.user.state = token.state as string;
      }

      return session;
    },

    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      const existingAccount = await getAccountByUserId(existingUser.id);

      token.isOAuth = !!existingAccount;
      token.firstName = existingUser.firstName;
      token.lastName = existingUser.lastName;
      token.email = existingUser.email;
      token.role = existingUser.role;
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;
      token.id = existingUser.id;
      token.ssn = existingUser.ssn;
      token.city = existingUser.city;
      token.dateOfBirth = existingUser.dateOfBirth;
      token.dwollaCustomerId = existingUser.dwollaCustomerId;
      token.dwollaCustomerUrl = existingUser.dwollaCustomerUrl;
      token.postalCode = existingUser.postalCode;
      token.state = existingUser.state;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
