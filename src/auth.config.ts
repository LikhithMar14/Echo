import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./schemas/auth";
import db from "@/db";
import bcrypt from "bcryptjs";


export default {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),

    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { username, password } = validatedFields.data;

          const existingUser = await db.user.findUnique({
            where: { username },
          });
          if (!existingUser || !existingUser.password) return null;
          const PasswordMatch = await bcrypt.compare(
            password,
            existingUser.password
          );
          
          if (PasswordMatch) {
            return {
              ...existingUser,
              username: existingUser.username || existingUser.email?.split('@')[0], 
              location: existingUser.location || "Mars", 
              isOauth: existingUser.isOauth || false,
            };
          }
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
