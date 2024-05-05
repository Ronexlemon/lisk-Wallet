import Image from "next/image";
import LandingPage from "@/components/LandingPage";
import Login from "@/components/Login";

export default function Home() {
  return (
    <main className="h-screen  pt-10 bg-liskPrimary ">
      {/* <LandingPage/> */}
      <Login/>

     
    </main>
  );
}
