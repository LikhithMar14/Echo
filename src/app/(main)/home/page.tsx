import Mainbar from "@/components/ui/Mainbar";
import { auth } from "@/auth";

import Sidebar from "@/components/ui/Sidebar";
import SuggestedUsers from "@/components/ui/Suggested";
import { followersById, followingById } from "@/data/user";

const HomePage = async () => {
  const session = await auth();


  if (!session?.user) return null;
  let { name, image, id, location, username, webiste } = session.user;

  const followingData = await followingById(id);

  const followingCount = followingData.followingCount;

  const followersData = await followersById(id);

  const followersCount = followersData.followersCount;

  image = image || "/ProfilePic.jpg";
  name = name || "guest";

  return (
    <div className="grid grid-cols-1 md:grid-cols-11  mx-auto px-5 gap-x-5 mt-12">
      <Sidebar
        name={name}
        username={username}
        profilePic={image}
        following={followingCount}
        followers={followersCount}
        location={location}
        website={webiste}
      />
      <Mainbar ProfilePic={image} />
      <SuggestedUsers />
    </div>
  );
};

export default HomePage;
