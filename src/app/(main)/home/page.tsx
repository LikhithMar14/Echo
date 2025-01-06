import Mainbar from "@/components/ui/Mainbar";

import Sidebar from "@/components/ui/Sidebar";
import { SidebarAction } from "@/actions/user.action";
import SuggestedUsers from "@/components/ui/Suggested";
const HomePage = async() => {
  const userData = await SidebarAction();
  if(!userData)return null;
  return (
    <div className="grid grid-cols-1 md:grid-cols-11 mx-auto px-5 gap-x-5 mt-12">

      <Sidebar {...userData} />
      <Mainbar />
      <SuggestedUsers />
    </div>
  );
};

export default HomePage;
