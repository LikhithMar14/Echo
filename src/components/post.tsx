import { HeartIcon } from "lucide-react";
import Image from "next/image";

import { FaRegComment } from "react-icons/fa";

interface PostProps {

    senderImage?: string;
    senderName?: string;
    senderUserName?: string;
    senderPostImage?: string;
    likes?: number;
    comments?: string[];
    messageContent?:string
  
}

const PostComponent = ({ comments,likes,senderImage,senderName,senderPostImage,senderUserName,messageContent}: PostProps) => {
  console.log(messageContent)
  return (
    <div className="flex flex-col space-y-2 items-center0 min-h-[370px] justify-around border  rounded-lg p-5  ">
      <div className="post-user w-full h-full">
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
            {"@"+senderUserName || "@guest"}
          </div>
        </div>
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
            priority = {true}
          />
        </div>
      </div>
      <div className="post-reactions w-full flex items-center  justify-around ">

        <div className="flex gap-x-2"><HeartIcon size={20} className="text-red-500" /><div className="text-sm">{likes}</div></div>
        <div  className="flex gap-x-2"> <FaRegComment size={20} className="text-blue-600" /><div className="text-sm">{comments?.length}</div></div>
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
