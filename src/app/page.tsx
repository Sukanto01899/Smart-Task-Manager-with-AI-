
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full h-screen">
      <h1 className="text-2xl text-blue-500 font-bold">This is Task manager </h1>

      <Link className="bg-blue-500 py-3 px-4 rounded-lg" href="/tasks">Go to task Manager</Link>
      
    </div>
  );
}
