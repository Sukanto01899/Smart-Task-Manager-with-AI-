
import Link from "next/link";
import { RiGeminiFill } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";


export default function Home() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full h-screen">
      <span className="h-12 w-12 rounded-full bg-blue-600 animate-pulse ring-2 ring-blue-400 flex justify-center items-center text-xl"><RiGeminiFill/></span>
      <h1 className="text-2xl text-blue-500 font-bold uppercase text-center">Smart Task Manager with AI</h1>

      <Link className="bg-gradient-to-r from-blue-500 to-blue-300 py-3 px-4 rounded-lg font-xl uppercase font-bold flex items-center gap-4" href="/tasks">Go to task Manager <FaArrowRightLong className="text-2xl text-blue-600"/></Link>
      
    </div>
  );
}
