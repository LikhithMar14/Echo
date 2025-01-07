"use server";
import { CreatePostSchema, CreatePostType } from "@/schemas/post";
import db from "@/db";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";


export const createPostAction = async (formData: FormData) => {
  const session = await auth();

  const userId = session?.user.id as string;
  console.log("In side Create post action");
  const values = Object.fromEntries(formData.entries());

  try {
    const { postMatter, postImage } = CreatePostSchema.parse(values);
    const post = await db.post.create({
      data: {
        content: postMatter,
        authorId: userId,
        image: postImage,
      },
    });

    console.log("Post Created Successfully")
  } catch (err) {
    console.error("Invalid Inputs", err);
  }

  revalidatePath('/home')
};
export const showPosts = async () => {
    const response = await db.post.findMany({
      select: {
        authorId: true,
        image: true,
        content: true,
        likes: true,
        comments: true,
        author: {
          select: {
            image: true,
            name: true,
            username: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  
    const updatedResponse = response.map(post => {
      if (!post.author.username && post.author.email) {
        post.author.username = post.author.email.split('@')[0];
      }
      return post;
    });
  
    return updatedResponse;
  };
  