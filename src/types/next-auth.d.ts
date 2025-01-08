import NextAuth, { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt";
import { PrismaAdapter } from "@auth/prisma-adapter";

declare module "next-auth"{

    interface User{
        username?:string,
        webiste?:string
    }
    interface Session{
        user:{
            isOauth:boolean,
            location:string,
            username:string,
            webiste:string
        } & DefaultSession["user"];
    }

    interface JWT{
        isOauth: boolean;
        location: string;
        username: string;
        website: string;
    }



}