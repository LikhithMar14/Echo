"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { UploadDropzone } from "@/utils/uploadthing";
import { useState } from "react";
import { createPostAction } from "@/actions/post.actions";
import Form from "next/form";

interface CreatePostProps {
  profilePic?: string;
}

const CreatePost = ({ profilePic }: CreatePostProps) => {
  const [imageUrl, setImageUrl] = useState<string>();

  return (
    <div className="flex flex-col p-4 bg-opacity-0 rounded-lg space-y-4">
      {/* Top Section: Profile and Input Prompt */}
      <div className="flex gap-x-4 items-center">
        <div className="w-12 h-12 bg-gray-600 rounded-full flex-shrink-0">
          {/* Profile Image Placeholder */}
          <Image
            src={profilePic || "/ProfilePic.jpg"}
            alt="Your Profile Image"
            height={50}
            width={50}
            className="rounded-full"
          />
        </div>
        <div className="text-gray-400 text-lg">What's on your mind?</div>
      </div>

      {/* Input Section */}
      <Form action={createPostAction}>
        <div>
          <textarea
            name="postMatter"
            defaultValue={""}
            className="bg-transparent text-white h-[60px] w-full p-4 rounded-lg resize-none outline-none placeholder-gray-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <UploadDropzone 
          className=" rounded-full border-[1px] border-sky-600 ut-button:bg-blue-700"
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            setImageUrl(res[0].url);

            alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />

        <input
          name="postImage"
          type="hidden"
          value={imageUrl || "/ProfilePic.jpg"}
        />

        {/* Footer */}

        <div className="flex justify-end items-center mt-3">
          <Button variant={"default"} type="submit">
            Post
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreatePost;
