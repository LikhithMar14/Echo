
import {
  Card,
  CardContent,
  CardDescription,

} from "@/components/ui/card";
import { MapPinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


interface SidebarProps {
  name: string ;
  username: string;
  profilePic?: string | null;
  following?: number;
  followers?: number;
  location?: string;
  website: string;
}

const Sidebar = ({
  name,
  username,
  profilePic = "/ProfilePic.jpg",
  followers,
  following,
  location = "Mars",
  website = "https://RehneDe-Bhai.com",
}: SidebarProps) => {

  // console.log("Website:",website)
  console.log("Followers :" , followers)
  console.log("Following: ",following)

  return (
    <div className="hidden md:block w-full h-fit sticky top-20 pt-5 col-span-3">
      <div className="w-full">
        <Card className="bg-secondary/15 shadow-lg shadow-neutral-600/5 backdrop-blur-lg border p-5 border-primary/10 rounded-2xl">
          <CardContent className="flex flex-col items-center justify-center space-y-6 p-6 rounded-lg shadow-lg">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-gray-300 shadow-sm">
              <Image
                src={profilePic || "/ProfilePic.jpg"}
                alt="User profile photo"
                fill
                style={{ objectFit: 'cover' }} 
              />
            </div>

            <div className="flex flex-col items-center text-center space-y-1">
              <div className="text-xl font-semibold text-white">{name}</div>
              <div className="text-sm text-muted-foreground">{username}</div>
            </div>

            <div className="flex justify-between items-center space-x-8 text-center">
              <div>
                <div className="text-lg font-semibold text-white">{followers}</div>
                <div className="text-sm text-white">Followers</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-white">{following}</div>
                <div className="text-sm text-white">Following</div>
              </div>
            </div>
          </CardContent>

          <CardDescription>
            <div className="flex justify-between m-3">
              <div className="flex gap-x-2 items-center">
                <MapPinIcon />
                <div className="text-md">{location}</div>
              </div>
              <Link href={website} target="_blank" rel="noopener noreferrer">
                <div>{website}</div>
              </Link>
            </div>
          </CardDescription>
        </Card>
      </div>
    </div>
  );
};

export default Sidebar;
