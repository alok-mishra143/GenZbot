"use client";

import React from "react";

import CustomCard from "./CustomCard";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { CardDescription, CardTitle } from "./ui/card";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { USERS } from "@/lib/constant";

import TitleSection from "./TitleSection";
import Image from "next/image";

interface AboutUsProps {
  className?: string;
}

const AboutUs: React.FC<AboutUsProps> = ({ className }: AboutUsProps) => {
  return (
    <div id="about">
      <div className="mb-10">
        <div className=" mt-8 p-4 flex flex-col ">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>

          <div className="flex flex-col ">
            <p className="mb-4">
              Welcome to our website! We are GenzBot, a friendly chatbot created
              using advanced language models. Our mission is to assist and
              provide information to users like you in a conversational manner.
            </p>
            <p className="mb-4">
              Whether you have questions, need assistance, or just want to chat,
              we&apos;re here for you 24/7. Feel free to interact with us and
              explore the capabilities of natural language processing.
            </p>

            <p className="mb-4 ">
              In addition to our primary chatbot, we&apos;re thrilled to
              introduce GenZ-bot, a tech-savvy virtual assistant designed with
              the vibrant spirit of Generation Z in mind. GenZ-bot is not your
              average bot; it&apos;s here to bring a fresh perspective to
              conversations and share the latest trends in technology, coding,
              and pop culture.
            </p>
            <p className="mb-4 ">
              GenZ-bot is more than just a coding assistant; it&apos;s your
              go-to source for memes, tech news, and casual banter. Whether
              you&apos;re a seasoned developer or just starting your coding
              journey, GenZ-bot is ready to chat, assist, and keep you
              entertained.
            </p>
            <p className="mb-4 ">
              As we continue to evolve and innovate in the world of
              conversational AI, our commitment remains strong making technology
              accessible, engaging, and enjoyable for users of all backgrounds.
              We&apos;re excited to have you on this journey with us!
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col">
        <Image
          src={"/Genzbot.png"}
          lazyRoot="genzbot"
          width={800}
          height={800}
          alt="genzbot"
          className="border-[1px] border-purple-700 rounded-3xl min-w-[250px] mb-5"
        />
        <TitleSection
          pill="🌟Join With Us"
          title="...
      
      "
        />{" "}
      </div>

      <section className="relative">
        <div className="w-full blur-[120px] rounded-full h-32 absolute bg-brand-primaryPurple/50 -z-10 top-56" />
        <div className="mt-20 px-4 sm:px-6 flex flex-col overflow-x-hidden overflow-visible items-center justify-center">
          <TitleSection
            pill="✨ Your Workspace, Perfected"
            title="A Platform for Everyone"
          />

          {[...Array(2)].map((arr, index) => (
            <div
              key={index}
              className={twMerge(
                clsx("mt-10 flex flex-nowrap gap-6 self-start", {
                  "flex-row-reverse": index === 1,
                  "animate-[slide_250s_linear_infinite]": true,
                  "animate-[slide_250s_linear_infinite_reverse]": index === 1,
                  "ml-[100vw]": index === 1,
                }),
                "hover:paused"
              )}
            >
              {USERS.map((testimonial, index) => (
                <CustomCard
                  key={testimonial.name}
                  className="w-[500px] shrink-0s rounded-xl dark:bg-gradient-to-t dark:from-border dark:to-background"
                  cardHeader={
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={`/avatars/${index + 1}.png`} />
                        <AvatarFallback>AV</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-foreground">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="dark:text-washed-purple-800">
                          {testimonial.name.toLocaleLowerCase()}
                        </CardDescription>
                      </div>
                    </div>
                  }
                  cardContent={
                    <p className="dark:text-washed-purple-800">
                      {testimonial.message}
                    </p>
                  }
                ></CustomCard>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
