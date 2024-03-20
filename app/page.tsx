import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
   <div className="h-screen">
    <UserButton />
    <h2>Subscribe to Taxi Jihlava</h2>
   </div>
   
  );
}
