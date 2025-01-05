import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { LoginSchema } from "./schemas/auth"
import db from "@/db"
import bcrypt from "bcryptjs"

console.log("google",process.env.AUTH_GOOGLE_ID)

export default { providers: [
    Google({
        clientId:process.env.AUTH_GOOGLE_ID,
        clientSecret:process.env.AUTH_GOOGLE_SECRET
    }),
    GitHub({
        clientId:process.env.AUTH_GITHUB_ID,
        clientSecret:process.env.AUTH_GITHUB_SECRET
    }),

    Credentials({

        async authorize(credentials){
            console.log("Hello1")
            const validatedFields = LoginSchema.safeParse(credentials);
            if(validatedFields.success){
                const {username,password} = validatedFields.data;

                const existingUser = await db.user.findUnique({
                    where:{username}
                })
                if(!existingUser || !existingUser.password)return null
                const PasswordMatch =  await bcrypt.compare(password,existingUser.password)
                console.log("Hello2")

                console.log(existingUser)

                if(PasswordMatch){
                  return existingUser
                }
            }
            return null
        }
    })

] } satisfies NextAuthConfig