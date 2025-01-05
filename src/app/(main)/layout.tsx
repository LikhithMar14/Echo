"use client"
import H1 from "@/components/ui/h1";
import Mainbar from "@/components/ui/Mainbar";
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";
import SuggestedUsers from "@/components/ui/Suggested";


export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-screen " suppressHydrationWarning={true}>

        <Navbar/>
        {children}

    
    </div>
  );
}
