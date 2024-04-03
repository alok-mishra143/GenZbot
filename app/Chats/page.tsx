import LeftSideBar from "@/components/LeftSideBar";
import MiddleBar from "@/components/MIddleBar";
import { UserButton, auth } from "@clerk/nextjs";

import React from "react";

const page = () => {
  return (
    <>
      <UserButton />
      <div className="flex flex-row">
        <LeftSideBar />
        <MiddleBar />
      </div>
    </>
  );
};

export default page;
