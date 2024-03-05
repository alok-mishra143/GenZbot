"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";

const Page = () => {
  const TempMeassage =
    "You:-Hey \n AI:-Hey bro what`s up 😎  \n \n You:who is  Mukesh ambani \nAI:-Mukesh Ambani? He's the richest dude in India, like, super rich! 💰 His company, Reliance, owns everything from phones to oil companies. He's like the Indian version of Elon Musk, but way less nerdy and way more bling. 🙄 \n\nYOU:-who is ratan tata \nAI:Yo, Ratan Tata is the OG G. He's a business tycoon, but he's also cool and down-to-earth. He's not just some suit-and-tie guy, he's a real one. He's like a Gen Z boy in a grandpa's body. 👴🔥";
  const [isSubmittingAi, setIsSubmittingAi] = useState(false);
  const [message, setMessage] = useState(""); // Initialize message as empty string

  const handleClick = () => {
    setIsSubmittingAi(true);

    const promptElement = document.getElementById("prompt") as HTMLInputElement;

    if (promptElement) {
      setMessage(
        (prevMessage) => prevMessage + "\n YOU:-" + promptElement.value + "\n" // Update message with user prompt
      );
      // generateAiAnswer();
    } else {
      console.error("Element with ID 'prompt' not found in the DOM");
    }
  };

  const generateAiAnswer = async () => {
    try {
      const promptElement = document.getElementById(
        "prompt"
      ) as HTMLInputElement;

      const prompt =
        promptElement.value +
        " act as a GenZ boy and give the answer like that also use the emoji if needed reply as you are in GenZ. Here is the example of it under the exampel and reply according to it ";

      // Additional chats:
      const additionalChats = [
        "\nHey \nYo.. dude, what's up? 😎",
        " \nDude, have you tried that new game? \nTotally, it's epic! 🎮",
        " \nPizza or burgers tonight? \nBro, definitely pizza, always a vibe 🍕",
        " \nAny Netflix recommendations? \nJust binged that new series, major plot twists! 🍿",
        " \nThoughts on the latest meme?\n Haha, that meme's legendary, had me dead 💀",
        "\nPlans for summer vacation?\n Beach vibes all the way, gonna catch those waves 🏄‍♂️",
        "\n How do you stay fit?\n Gym grind, but also, staying active with some sick dance moves 💃",
        "\n How do you \nYo.. OG man don`t ask like that 🧓",
      ];

      // Combine the prompt and additional chats
      const completePrompt = prompt + additionalChats.join("");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/bard`,
        {
          method: "POST",
          body: JSON.stringify({ question: completePrompt }), // Use updated message as question
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const aiAnswer = await response.json();
      console.log(aiAnswer);
      setMessage(
        (prevMessage) => prevMessage + "\n AI:-" + aiAnswer.text + "\n" // Update message with AI answer
      );

      const formattedAiAnswer = aiAnswer.error
        ? "Sorry, I could not provide an answer to your question, please try again."
        : aiAnswer.text.replace(/\n/g, "<br />");
    } catch (error) {
      console.error(error);
      // Handle errors here, e.g., show an error message
      toast({
        title: "Error generating AI answer ⚠️",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsSubmittingAi(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center ">
        <Label htmlFor="message">Your message</Label>
        <Textarea
          disabled
          className="w-[600px] h-[500px] mb-4 cursor-pointer"
          id="message"
          value={TempMeassage}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Input placeholder="Enter your prompt" id="prompt" />
        {
          <Button
            className="hover:none mt-2 "
            onClick={handleClick}
            disabled={isSubmittingAi}
          >
            {isSubmittingAi ? "Sending.." : "Send"}
          </Button>
        }
      </div>
    </div>
  );
};

export default Page;
