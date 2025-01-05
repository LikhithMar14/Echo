import { users, comments, follows, likes, notifications, posts } from "@/data/sample-data";
import db from "@/db";



async function main() {
  try {

    // await db.notification.deleteMany({});
        
    // // 2. Delete Likes (they depend on User, Post, and Comment)
    // await db.like.deleteMany({});
    
    // // 3. Delete Comments (they depend on User and Post)
    // await db.comment.deleteMany({});
    
    // // 4. Delete Follows (they depend on User)
    // await db.follows.deleteMany({});
    
    // // 5. Delete Posts (they depend on User)
    // await db.post.deleteMany({});
    
    // 6. Delete Users last (because other tables depend on them)
    // await db.user.deleteMany({});


    // await db.user.createMany({
    //   data: users,
    // });

    // 2. Seed Posts next, as they depend on Users
    // await db.post.createMany({
    //   data: posts,
    // });

    // 3. Seed Comments, as they depend on both Users and Posts
    // await db.comment.createMany({
    //   data: comments,
    // });

    // // 4. Seed Likes, as they depend on Posts and Comments
    // await db.like.createMany({
    //   data: likes,
    // });

    // // 5. Seed Follows, as it depends on Users
    // await db.follows.createMany({
    //   data: follows,
    // });

    // 6. Seed Notifications last, as they depend on Users, Posts, and Comments
    // await db.notification.createMany({
    //   data: notifications,
    // });

    console.log("Seeded Successfully")

  } catch (error) {
    console.error("Error during Seeding: ", error);
  } finally {
    await db.$disconnect();
  }
}


main();
