"use server"
import Mainbar from "@/components/ui/Mainbar";
import { auth } from "@/auth";

import Sidebar from "@/components/ui/Sidebar";
import SuggestedUsers from "@/components/ui/Suggested";
import {currentUserFollowersCount, currentUserFollowingCount} from "@/actions/user.action"

const HomePage = async () => {
  const session = await auth();



  if (!session?.user) return null;
  let { name, image, id, location, username, webiste } = session.user;

  const followers = await currentUserFollowersCount();
  const following = await currentUserFollowingCount()
  console.log("Username of the user: ",session.user.username)
  // console.log("Followers Count: ",followers)
  // console.log("Following Count:",following)



  image = image || "/ProfilePic.jpg";
  name = name || "guest";

  return (
    <div className="grid grid-cols-1 md:grid-cols-11  mx-auto px-5 gap-x-5 mt-12">
      <Sidebar
        name={name}
        username={username}
        profilePic={image}
        following={following}
        followers={followers}
        location={location}
        website={webiste}
      />
      <Mainbar ProfilePic={image} />
      <SuggestedUsers />
    </div>
  );
};

export default HomePage;
