"use server"
import { auth } from "@/auth";
import db from "@/db"


export const getUserById = async(id:string)=>{
    try{

        const user = await db.user.findFirst({
            where:{id}
        })
        return user

    }catch(err){
        console.log(err);
        return null;
    }
}

export const followersById = async (id: string) => {

    const session = await auth();
    if(session?.user)return null;

    const followers = await db.follows.findMany({
    
      where:{
        followingId:session?.user.id as string
      },
      select:{
        followerId:true
      }
    })
    console.log("Followers in action: ",followers)
    return followers

};

  export const followingById = async (id: string | undefined) => {
    try {
      const following = await db.follows.findMany({
        where: {
          followingId: id,
        },
        select: {
          followingId: true,
        },
      });
  
      const followingCount = following.length; 
      return { followingCount, followingIds: following };
    } catch (err) {
      console.error("Error fetching following count and IDs:", err);
      throw err;
    }
  };
  