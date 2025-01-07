"use server";
import { CreatePostSchema, CreatePostType } from "@/schemas/post";
import db from "@/db";
import { auth } from "@/auth";


export const createPostAction = async (formData: FormData) => {
  const session = await auth();

  const userId = session?.user.id as string;
  console.log("In side Create post action");
  console.log("Form Data", formData);
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
  } catch (err) {
    console.error("Invalid Inputs", err);
  }
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
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  
    return response;
  };
  