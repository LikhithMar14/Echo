"use server"


import { AuthError } from "next-auth";


import db from "@/db";
import { RegistrationType, RegistrationSchema, LoginType, LoginSchema } from "@/schemas/auth";
import bcrypt, { hash } from "bcryptjs";
import { signIn } from "@/auth";
export const register = async (data: RegistrationType) => {

  try {

    const validatedData = RegistrationSchema.parse(data);


    if (!validatedData) {
      return { error: "Invalid input data" };
    }


    const { email, username, password, confirmPassword } = validatedData;


    if (password !== confirmPassword) {
      return { error: "Passwords do not match" };
    }



    const userExists = await db.user.findFirst({
      where: {
        email,
      },
    });

    // If the user exists, return an error
    if (userExists) {
      return { error: "Email already is in use. Please try another one." };
    }

    const lowerCaseEmail = email.toLowerCase();
    const hashedPassword = await  bcrypt.hash(password,10)

    const user = await db.user.create({
      data: {
        email: lowerCaseEmail,
        username,
        password:hashedPassword
      },
    });
    
    return { success: "User Registered Successfully" };
  } catch (error) {

    console.error("Database error:", error);

  }
};
export const login = async (data:LoginType) => {
  const validatedData = LoginSchema.parse(data);
  if(!validatedData){
    return {error:"Invalid Input"}
  }
  const {username,password} = validatedData;



  const userExists = await db.user.findFirst({
    where:{
      username
    }
  })
  console.log(userExists)

  if(!userExists){
    return { error: "Invalid username or password"}
  }



  try {
    const response = await signIn("credentials", {
      username,
      password,
      redirectTo: '/',
    });
    return {success:"Login Successful"}
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials"};
        case "CredentialsSignin":
          throw error;
        default:
          return { success: "Login Successful" };
      }
    }
    throw error
  }
}