import Image from "next/image";

import ReactionBar from "./ReactionBar";
import { getComments, likeStatus } from "@/actions/post.actions";
import FollowButton from "./Follow";
import { followCheck } from "@/actions/user.action";
import { auth } from "@/auth";

interface PostProps {
  senderImage?: string;
  senderName?: string;
  senderUserName?: string;
  senderPostImage?: string;
  likes?: string[];
  comments?: string[];
  messageContent?: string;
  postId: string;
  isLiked: boolean;
  senderId: string;
  currentUserId: string;
}

const PostComponent = async ({
  likes,
  senderImage,
  senderName,
  senderPostImage,
  senderUserName,
  messageContent,
  postId,
  senderId,
  currentUserId,
}: PostProps) => {
  const session = await auth();

  const isLiked = await likeStatus(postId);
  let liked = false;
  if (isLiked) liked = true;
  const comments = await getComments(postId);

  // console.log("CurrentUserId:",currentUserId)

  const followStatus = await followCheck(session?.user.id as string, senderId);

  return (
    <div className="flex flex-col space-y-2 items-center0 min-h-[370px] justify-around border  rounded-lg p-5  ">
      <div className="post-user flex w-full h-full justify-between items-center">
        <div className="flex items-center justify-start gap-x-3">
          <div>
            <Image
              src={senderImage || "/ProfilePic.jpg"}
              width={40}
              height={40}
              className="rounded-full"
              alt="sender image"
            />
          </div>
          <div className="text-md font-bold font-sans">
            {senderName || "Sender Name"}
          </div>
          <div className="text-md text-muted-foreground">
            {"@" + senderUserName || "@guest"}
          </div>
        </div>
        {followStatus !== -1 ? (
          <FollowButton otherUserId={senderId} followStatus={followStatus} />
        ) : (
          <div className="hidden"></div>
        )}
      </div>
      <div className="flex space-y-2 m-4 py-5">
        {messageContent || "Message Content"}
      </div>
      <div className="post-image">
        <div className="post-image">
          <Image
            src={senderPostImage || "/samplePost.jpeg"}
            alt="Post Image"
            width={500}
            height={300}
            style={{ objectFit: "cover" }}
            className="p-2 pb-4 rounded-xl"
            priority={true}
          />
        </div>

        <ReactionBar
          isLiked={liked}
          commentCount={comments?.length}
          likeCount={likes?.length}
          postId={postId}
          comments={comments as any}
        />
      </div>
    </div>
  );
};

export default PostComponent;
