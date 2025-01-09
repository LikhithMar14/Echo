"use server";
import { auth } from "@/auth";
import db from "@/db";
import { revalidatePath } from "next/cache";

export const followCheck = async (followerId: string, followingId: string) => {
  //   if (followerId === followingId) {
  //     throw new Error("You cannot follow yourself.");
  //   }
  if (followerId === followingId) {
    return -1;
  }
//   console.log("Follower id: ", followerId);
//   console.log("Following id: ", followingId);
  const response = await db.follows.findUnique({
    where: {
      followerId_followingId: {
        followerId: followerId as string,
        followingId: followingId as string,
      },
    },
  });

  if (response) return true;
  return false;
};

export const followUnfollowUser = async (otherUserId: string) => {
  const session = await auth();
  if (!session?.user) return null;
  //   console.log(session.user.id);
  //   console.log(otherUserId)
  console.log("Triggered DB");
  if (session.user.id === otherUserId) {
    throw new Error("You cannot follow yourself.");
  }

  const alreadyFollows = await followCheck(
    session.user.id as string,
    otherUserId
  );

  if (!alreadyFollows) {
    await db.follows.create({
      data: {
        followerId: session.user.id as string,
        followingId: otherUserId,
      },
    });
  } else {
    await db.follows.delete({
      where: {
        followerId_followingId: {
          followerId: session.user.id as string,
          followingId: otherUserId as string,
        },
      },
    });
    revalidatePath("/home");
  }
};


export const currentUserFollowersCount = async () => {
    const session = await auth();
    if (!session || !session.user?.id) {
        throw new Error("User is not authenticated");
    }

    const userId = session.user.id;

    const count = await db.follows.count({
        where: {
            followingId: userId,
        },
    });

    return count;
};

export const currentUserFollowingCount = async() => {
    const session = await auth();
    if(!session || !session.user.id){
        throw new Error("User is not authenticated")
    }

    const userId =session.user.id;
    const count = await db.follows.count({
        where:{
            followerId:userId,
        }
    })

    return count
}