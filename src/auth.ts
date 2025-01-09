

import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "@/db";
import authConfig from "./auth.config";
import { getUserById } from "./data/user";
import { getAccountByUserId } from "./data/account";

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
  callbacks: {
    async signIn({ user, account }) {
      // console.log(user)
      console.log("In Signin Callback")
      user.username = user?.email?.split("@")[0];

      console.log("In google oauth callback");
      console.log("User");
      console.log(user.username)
      return true;
    },
    async jwt({ token, profile, account }) {
      // console.log("Jwt Call back")
      // console.log(token)
      if (!token || !token.sub) return token;
      const existingUser = await getUserById(token?.sub);

      if (!existingUser) return token;

      const existingAccount = await getAccountByUserId(existingUser?.id);

      token.isOauth = !!existingAccount;
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.image = existingUser.image;
      (token.location = existingUser.location || "Mars"),
        (token.username = existingUser.username
          ? existingUser.username
          : existingUser?.email?.split("@")[0]);

      return token;
    },
    //@ts-ignore
    async session({ token, session }) {
      // console.log("In Session Callback");
      // console.log("Token:", token);

      const updatedSession = {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
          isOauth: token.isOauth,
          location: token.location,
          username: token.username,
          name: token.name,
          email: token.email,
          image: token.image,
        },
      };

      // console.log("Updated Session:", updatedSession);

      return updatedSession;
    },
  },
});
