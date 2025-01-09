"use server"
import { showPosts } from "@/actions/post.actions";
import CreatePost from "../CreatePost";
import PostComponent from "../post";
import { likeStatus } from "@/actions/post.actions";
import { auth } from "@/auth";

interface MainbarProps{
  ProfilePic ?:string 
}

const Mainbar = async({ProfilePic}:MainbarProps) => {
  const session  = await auth()
  const posts = await showPosts();
  // console.log(posts)
  // console.log(posts[0])
  // console.log("In Main bar")

  

  return (
    <div className="w-fullbg-secondary/15 shadow-lg shadow-neutral-600/5 backdrop-blur-lg md:border md:p-10  border-primary/10  rounded-2xlh-full col-span-5 flex flex-col gap-y-10 mt-5 rounded-xl">
      <CreatePost profilePic={ProfilePic }/>
      {
        posts.map((post,index)=>(
          //@ts-ignore
          <PostComponent comments={post?.comments as  any} senderImage={post?.author?.image as string} senderName= {post?.author?.name as string} key={index} likes={post?.likes} senderPostImage={post?.image} senderUserName={post?.author?.username || session?.user.username} messageContent={post?.content} postId={post?.id} isLiked = {post?.likeStatus} senderId={post?.authorId} currentUserId={session?.user.id as string}/>

        ))
      }
  
    </div>
  );
};

export default Mainbar;
