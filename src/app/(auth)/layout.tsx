import H1 from "@/components/ui/h1";
import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-screen py-5 mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-screen ">
        {/* Left Section */}
        {/* Left Section */}
        <div className="hidden md:flex col-span-2 items-center my-auto min-h-[600px] justify-center brounded-lg shadow-sm  p-8 ">
          <div className="flex flex-col items-center text-center gap-10 ">
            <H1 className="text-3xl bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text font-black tracking-tighter text-transparent">
              "Echo: Where Your Voice Finds Its Amplification."
            </H1>

            <div className="text-muted-foreground leading-7 max-w-md space-y-1 text-md">
            Join Echo today! Share your thoughts, your memes, and your vibe with the world.
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-1 flex items-center justify-center">
          <div className="w-full shadow-sm ">{children}</div>
        </div>
      </div>
    </div>
  );
}
