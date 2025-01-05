import Mainbar from "@/components/ui/Mainbar";

import Sidebar from "@/components/ui/Sidebar";
import SuggestedUsers from "@/components/ui/Suggested";
const HomePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-11 mx-auto px-5 gap-x-5 mt-12">
      <Sidebar />
      <Mainbar />
      <SuggestedUsers />
    </div>
  );
};

export default HomePage;
