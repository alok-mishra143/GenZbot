import LeftSideBar from "@/components/LeftSideBar";
import MiddleBar from "@/components/MIddleBar";
import { connectToDatabase } from "@/lib/actions/mongooes";
import { auth } from "@clerk/nextjs";

import React from "react";

const page = () => {
  return (
    <div className="flex flex-row">
      <LeftSideBar />
      <MiddleBar />
    </div>
  );
};

export default page;
