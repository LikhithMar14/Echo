import { Button } from "./ui/button";

const SuggestedPerson = () => {
  return (
    <div className="flex items-center justify-between bg-opacity-0 rounded-lg">
      {/* Profile Info Section */}
      <div className="flex items-center gap-x-4">
        {/* Profile Image */}
        <div className="w-12 h-12 bg-gray-600 rounded-full flex-shrink-0">
          <span className="text-white flex items-center justify-center h-full">C</span>
        </div>

        {/* Name and Bio */}
        <div>
          <div className="text-white font-semibold">John Doe</div>
          <div className="text-gray-400 text-sm">Software Engineer</div>
        </div>
      </div>

      {/* Follow Button */}
      <div>
        <Button variant={"secondary"}>Follow</Button>
      </div>
    </div>
  );
};

export default SuggestedPerson;
