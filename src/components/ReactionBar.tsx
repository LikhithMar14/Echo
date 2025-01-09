"use client";

import { addComment, likeUnlikePost } from "@/actions/post.actions";
import { HeartIcon } from "lucide-react";
import { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";

interface Comment {
  id: string;
  author: {
    image?: string;
    username: string;
  };
  content: string;
}

interface ReactionBarProps {
  likeCount?: number | string;
  commentCount?: number | string;
  isLiked?: boolean;
  postId?: string;
  comments?: Comment[];
}

const ReactionBar = ({
  commentCount,
  likeCount,
  isLiked,
  postId,
  comments = [],
}: ReactionBarProps) => {
  const [like, setLike] = useState<boolean>(isLiked as boolean);
  const [likeNo, setLikeCount] = useState<number>(likeCount as number);
  const [commentDialogue, setCommnetDialogue] = useState<boolean>(false);
  const [commentContent, setCommentContent] = useState<string>("");

  const CommentComponent = ({
    authorImage,
    authorUsername,
    commentContent,
  }: {
    authorImage?: string;
    authorUsername?: string;
    commentContent?: string;
  }) => (
    <Card className=" border rounded-lg shadow-md">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <Image
            src={authorImage as string}
            alt={`${authorUsername}'s profile`}
            height={30}
            width={30}
            className="rounded-full"
          />

          <div className="text-sm font-semibold text-muted-foreground">
            {"@" + authorUsername}
          </div>
        </div>
      </CardHeader>
      <CardContent className=" text-white">
        <p className="text-sm font-sans">{commentContent}</p>
      </CardContent>
    </Card>
  );

  const commentHandler = async () => {
    setCommnetDialogue((value) => !value);
  };

  const commentSubmitter = async () => {
    try {
      await addComment(commentContent, postId as string);
    } catch (err) {
      console.error("Comment creation failed");
    } finally {
      setCommentContent("");
    }
  };

  const likeHandler = async () => {
    await likeUnlikePost(postId as string);
    setLike((value) => !value);
    setLikeCount((value) => (like ? value - 1 : value + 1));
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex justify-start">
        <Button onClick={likeHandler} variant="ghost">
          <HeartIcon size={25} fill={like ? "red" : "none"} cursor="pointer" />
          <span>{likeNo}</span>
        </Button>
        <Button variant="ghost" onClick={commentHandler}>
          <FaRegComment size={20} fill={commentDialogue ? "orange" : "white"} />
          <span>{commentCount}</span>
        </Button>
      </div>

      {commentDialogue && (
        <div className="flex flex-col space-y-3">
          <Textarea
            placeholder="Enter your comment"
            className="resize-none focus-visible:ring-0"
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
          />
          <div className="flex items-center justify-end space-y-2">
            <Button
              className="px-1 py-0 text-sm font-extralight hover:bg-gray-300"
              onClick={commentSubmitter}
            >
              Comment
            </Button>
          </div>
          <hr />
          <Dialog>
            <DialogTrigger className="text-center text-sky-400">
              Show all comments
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Comments</DialogTitle>
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <CommentComponent
                    key={comment.id}
                    authorImage={comment.author.image}
                    authorUsername={comment.author.username}
                    commentContent={comment.content}
                  />
                ))
              ) : (
                <p>No comments yet. Be the first to comment!</p>
              )}
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
};

export default ReactionBar;
