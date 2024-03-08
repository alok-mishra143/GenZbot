"use client";

import AboutUs from "@/components/AboutUs";
import GenzBotFooter from "@/components/Footer";
import Marque from "@/components/Marque";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <motion.div
      className=" overflow-hidden"
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="w-screen h-screen ">
        <Navbar />

        <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center">
              <h1 className="mr-3 text-5xl font-semibold">
                <span className="group relative">
                  Chat
                  <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-900 w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform rounded-full duration-500 "></span>
                </span>{" "}
                with GenZ{" "}
                <span className="group relative">
                  Bot
                  <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-950 w-full transform origin-left scale-x-100  transition-transform rounded-full animate-pulse"></span>
                </span>
              </h1>
            </div>

            <div className="flex mt-2 relative">
              <Button className="bg-black rounded-full  border-purple-700    border-2 z-1">
                <Link href="/Chats" className="z-1">
                  {" "}
                  ✨Go To Chats
                </Link>
              </Button>
              <div className="bg-purple-700 blur-2xl  mr-2 h-14 w-14 rounded-full absolute z-[-99px] "></div>
            </div>

            <p className="max-w-xl mt-1 text-lg text-slate-600">
              Join millions of students, researchers and professionals to
              instantly answer questions and understand research with{" "}
              <span className="text-slate-300">AI</span>
            </p>

            <Marque />
          </div>
        </div>
      </div>
      <div className="w-full h-[2px] bg-slate-500 -mt-10 mb-2"></div>
      <AboutUs />
      <GenzBotFooter />
    </motion.div>
  );
}
