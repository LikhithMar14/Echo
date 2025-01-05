import { Bell } from "lucide-react";


import { MdOutlineAccountCircle } from "react-icons/md";



const Navbar = () => {
    return ( 

        <div className="sticky mx-5 top-3 z-50  bg-secondary/15 shadow-lg shadow-neutral-600/5 backdrop-blur-lg border p-5  border-primary/10  rounded-2xl ">
            <div className="flex justify-between mx-2 items-center">
                <div className="bg-gradient-to-b  from-purple-400 to-orange-700 bg-clip-text text-transparent font-black tracking-tighter text-4xl">
                    Echo
                </div>
                <div className="flex items-center gap-x-10 mx-0 md:mx-5">

                    <Bell/>  
                    <MdOutlineAccountCircle size={30}/>  
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;