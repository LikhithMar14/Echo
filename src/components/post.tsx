import { HeartIcon } from "lucide-react";
import Image from "next/image";

import { FaRegComment } from "react-icons/fa";

interface PostProps {
  props?: {
    senderImage?: string;
    senderName?: string;
    senderUserName?: string;
    senderPostImage?: string;
    likes?: number;
    comments?: string[];
  };
}

const PostComponent = ({ props }: PostProps) => {
  return (
    <div className="flex flex-col space-y-2 items-center0 min-h-[370px] justify-around border  rounded-lg p-5  ">
      <div className="post-user w-full h-full">
        <div className="flex items-center justify-start gap-x-3">
          <div>
            <Image
              src={props?.senderImage || "/ProfilePic.jpg"}
              width={40}
              height={40}
              className="rounded-full"
              alt="sender image"
            />
          </div>
          <div className="text-md font-bold font-sans">
            {props?.senderName || "Sender Name"}
          </div>
          <div className="text-md text-muted-foreground">
            {props?.senderUserName || "@guest"}
          </div>
        </div>
      </div>
      <div className="post-image">
        <div className="post-image">
          <Image
            src={"/samplePost.jpeg"}
            alt="Post Image"
            width={500}
            height={300}
            style={{ objectFit: "cover" }}
            className="p-2 pb-4 rounded-xl"
          />
        </div>
      </div>
      <div className="post-reactions w-full flex items-center  justify-around ">

        <div className="flex gap-x-2"><HeartIcon size={20} className="text-red-500" /><div className="text-sm">{props?.likes || 545}</div></div>
        <div  className="flex gap-x-2"> <FaRegComment size={20} className="text-blue-600" /><div className="text-sm">{props?.comments?.length || 20}</div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

       
      </div>
    </div>
  );
};

export default PostComponent;
