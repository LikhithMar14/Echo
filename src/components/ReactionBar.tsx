"use client";

import { likeUnlikePost } from "@/actions/post.actions";
import { HeartIcon, Pointer } from "lucide-react";
import { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { Button } from "./ui/button";

interface ReactionBarProps {
  likeCount?: number | string;
  commentCount?: number | string;
  isLiked?: boolean;
  postId?: string;
}
const ReactionBar = ({
  commentCount,
  likeCount,
  isLiked,
  postId,
}: ReactionBarProps) => {
  const [like, setLike] = useState<boolean>(isLiked as boolean);
  const likeHandler = async () => {
    console.log("Like handler triggered");
    await likeUnlikePost(postId as string);
    setLike((value) => !value);
  };
  return (
    <div className="flex mx-2 items-center gap-x-4">
      <div className="flex gap-x-1 items-center">
        <Button onClick={likeHandler} variant="ghost">
          <HeartIcon size={20} fill={like ? "red" : "none"} cursor="pointer" />
          <span>{likeCount}</span>
        </Button>
      </div>
      <div className="flex gap-x-1 items-center">
        <FaRegComment size={20} />
        {commentCount}
      </div>
    </div>
  );
};

export default ReactionBar;
