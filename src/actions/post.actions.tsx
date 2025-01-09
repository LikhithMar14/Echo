"use server";
import { createCommentSchema, CreatePostSchema, CreatePostType } from "@/schemas/post";
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

    console.log("Post Created Successfully");
  } catch (err) {
    console.error("Invalid Inputs", err);
  }

  revalidatePath("/home");
};
export const showPosts = async () => {


  const posts = await db.post.findMany({
    include: {
      author: {
        select: {
          id: true,
          name: true,
          username: true,
          email: true,
          image: true,
          _count: {
            select: {
              followers: true,
              following: true,
            },
          },
        },
      },
      likes: {
        include: {
          user: {
            select: {
              id: true,
              image: true,
            },
          },
        },
      },
      comments: {
        include: {
          author: {
            select: {
              id: true,
              username: true,
              name: true,
              image: true,
            },
          },
        },
      },
      _count: {
        select: {
          likes: true,
          comments: true,
        },
      },
    
    },
    orderBy:{
      createdAt : "desc"
    }
  });


  return posts;

  
};

export const likeUnlikePost = async (postId: string) => {
  const session = await auth();
  const userId = session?.user.id as string;

  const like = await db.like.findUnique({
    where: {
      userId_postId: {
        userId: userId,
        postId: postId,
      },
    },
  });

  if (like) {
    await db.like.delete({
      where: {
        userId_postId: {
          userId: userId,
          postId: postId,
        },
      },
    }); 
  } else {
    await db.like.create({
      data: {
        userId: userId,
        postId: postId,
        type: "POST",
      },
    });
  }

  revalidatePath("/home");
};
export const likeStatus = async (postId: string) => {
  const session = await auth();
  const userId = session?.user.id as string;
  const like = await db.like.findUnique({
    where: {
      userId_postId: {
        userId: userId,
        postId: postId,
      },
    },
  });

  return like;
};

export const addComment = async(commentContent:string,postId:string) => {
  const session = await auth();
  const userId = session?.user.id as string;

  const comment = await db.comment.create({
    data:{
      content:commentContent,
      authorId:userId as string,
      postId:postId,
      type:"POST"
    }
  })
  console.log("Comment added successfully")
  revalidatePath('/comments')
}

export const getComments = async(postId:string) => {


  const comments = await db.comment.findMany({
    where:{
      postId:postId
    },
    include:{
      author:{
        select:{
          username:true,
          image:true,
          name:true,
          id:true
        }
      }
    }
  })

  return comments
};