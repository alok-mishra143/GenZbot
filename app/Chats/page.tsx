import LeftSideBar from "@/components/LeftSideBar";
import MiddleBar from "@/components/MIddleBar";

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
