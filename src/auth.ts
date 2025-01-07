import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import db from "@/db"
import authConfig from "./auth.config"
import { getUserById } from "./data/user"
import { getAccountByUserId } from "./data/account"

 
export const { auth, handlers:{GET,POST}, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(db),
    session:{strategy:"jwt"},
    ...authConfig,
    callbacks:{
        async signIn({user,account}){


            return true
        },
        async jwt({token,profile,account}){


            if(!token|| !token.sub)return token
            const existingUser = await getUserById(token?.sub);

            if(!existingUser)return token;

            const existingAccount = await getAccountByUserId(existingUser?.id);

            token.isOauth = !!existingAccount;
            token.name = existingUser.name;
            token.email = existingUser.email;
            token.image = existingUser.image;
            token.location = existingUser.location || "Mars",
            token.username = existingUser.username 
            ? existingUser.username 
            : existingUser?.email?.split('@')[0];

            return token
        },
        async session({token,session}){

            return {
                ...session,
                user:{
                    ...session.user,
                    id:token.sub,
                    isOauth: token.isOauth,
                    location:token.location,
                    username:token.username
                
                }
            }
        }
    },


})