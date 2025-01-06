"use server"
import CreatePost from "../CreatePost";
import PostComponent from "../post";

const Mainbar = () => {
  return (
    <div className="w-fullbg-secondary/15 shadow-lg shadow-neutral-600/5 backdrop-blur-lg md:border md:p-10  border-primary/10  rounded-2xlh-full col-span-5 flex flex-col gap-y-10 mt-5 rounded-xl">
      <CreatePost/>
      <PostComponent/>
      <PostComponent/>
      <PostComponent/>
      <PostComponent/>
      <PostComponent/>
    </div>
  );
};

export default Mainbar;
