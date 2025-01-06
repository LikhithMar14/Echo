// actions/user.action.ts
import { auth } from "@/auth";

export const SidebarAction = async () => {
  const session = await auth();


  if (!session?.user) {
    return {
      name: "Guest",
      username: "@guest",
      profilePic: "/ProfilePic.jpg",
      followers: 0,
      following: 0,
      location: "Unknown",
      website: "https://example.com",
    };
  }

  return {
    name: session.user.name || "Anonymous",
    // username: session.user.username || "@anonymous",
    profilePic: session.user.image || "/ProfilePic.jpg",
    // followers: session.user.followers || 0,
    // following: session.user.following || 0,
    // location: session.user.location || "Unknown",
    // website: session.user.website || "https://example.com",
  };
};
