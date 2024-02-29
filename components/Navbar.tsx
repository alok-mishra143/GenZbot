"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="fixed mt-8 left-1/2 -translate-x-1/2 z-50 backdrop-blur-3xl flex items-center justify-between w-full sm:w-[500px] md:w-[500px] bg-white/5 h-10 rounded-3xl text-white border-purple-900 border-[1px]">
      <Link href={"/"}>
        <h1 className="text-white ml-3 font-semibold">
          Gen<span className="text-purple-200 font-extrabold">Z</span>Bot
        </h1>
      </Link>

      <div className="mr-2">
        <ul className="flex gap-2">
          <li>
            <Link
              href={"#about"}
              className="cursor-pointer relative group hover:text-white/70 "
            >
              <div className="group">
                About
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-purple-500 via-purple-600 to-purple-900 w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform rounded-full duration-500 "></span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              href={"#contact"}
              className="cursor-pointer hover:text-white/70 relative"
            >
              <div className="group">
                Contact
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-purple-500 via-purple-600 to-purple-900 w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform rounded-full duration-500 "></span>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      <div className="bg-purple-700 blur-sm  mr-2 h-5 w-5 rounded-full"></div>
    </div>
  );
};

export default Navbar;
