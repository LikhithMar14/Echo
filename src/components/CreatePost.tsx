import { Image } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const CreatePost = () => {
  return (
    <div className="flex flex-col p-4 bg-opacity-0 rounded-lg space-y-4">
      {/* Top Section: Profile and Input Prompt */}
      <div className="flex gap-x-4 items-center">
        <div className="w-12 h-12 bg-gray-600 rounded-full flex-shrink-0">
          {/* Profile Image Placeholder */}
          <span className="text-white flex items-center justify-center h-full">C</span>
        </div>
        <div className="text-gray-400 text-lg">What's on your mind?</div>
      </div>

      {/* Input Section */}
      <div>
        <textarea
          className="bg-transparent text-white h-[60px] w-full p-4 rounded-lg resize-none outline-none placeholder-gray-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <div className="flex gap-x-2">
            <Image className=""/>
            <div className="text-muted-foreground">Image</div>
        </div>
       
        <Button variant={"default"}>Post</Button>
      </div>
    </div>
  );
};

export default CreatePost;
