"use client";

import { useState } from "react";
import { toast } from "./ui/use-toast";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const MiddleBar = () => {
  const TempMeassage =
    "You:-Hey \n AI:-Hey bro what`s up 😎  \n \n You:who is  Mukesh ambani \nAI:-Mukesh Ambani? He's the richest dude in India, like, super rich! 💰 His company, Reliance, owns everything from phones to oil companies. He's like the Indian version of Elon Musk, but way less nerdy and way more bling. 🙄 \n\nYOU:-who is ratan tata \nAI:Yo, Ratan Tata is the OG G. He's a business tycoon, but he's also cool and down-to-earth. He's not just some suit-and-tie guy, he's a real one. He's like a Gen Z boy in a grandpa's body. 👴🔥";
  const [promptValue, setPromptValue] = useState("");
  const [isSubmittingAi, setIsSubmittingAi] = useState(false);
  const [message, setMessage] = useState(""); // Initialize message as empty string

  const handleChange = (event: any) => {
    const value = event.target.value;
    setPromptValue(value);
  };

  const handleClick = () => {
    setIsSubmittingAi(true);

    setMessage(
      (prevMessage) => prevMessage + "\n YOU:-" + promptValue // Update message with user prompt
    );

    generateAiAnswer();
  };

  const generateAiAnswer = async () => {
    try {
      const prompt =
        "your name is genZbot you are the best Assistent that have the best solving skill and also he has good sense of humore that he reply also you use the emoji so that chat look attarctive and more easy to read and understand you like to reply the short answer but if requre you give the detail answer i request you to give that reply " +
        promptValue;
      // Combine the prompt and additional chats
      setPromptValue("");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/bard`,
        {
          method: "POST",
          body: JSON.stringify({ question: prompt }), // Use updated message as question
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const aiAnswer = await response.json();

      setMessage(
        (prevMessage) =>
          prevMessage +
          "\n ---------------------------------------------------------------\nAI:-" +
          aiAnswer.text +
          "\n" // Update message with AI answer
      );
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
    <div className="flex items-center justify-center w-full h-full ">
      <div className="flex flex-col justify-center items-center w-full max-w-screen-md h-screen mp-4 ">
        <Textarea
          disabled
          className="w-full h-full mb-1 cursor-pointer items-center justify-center flex "
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className=" w-full flex flex-row items-center justify-center border-[2px] rounded-2xl border-purple-700 mb-2 ">
          <Textarea
            placeholder="Enter your prompt"
            id="prompt"
            style={{
              minHeight: "12px",
              height: "auto",
            }}
            value={promptValue}
            className=" outline-none focus:outline-none p-3 m-3 "
            onChange={handleChange}
          />
          <Button
            className={`${isSubmittingAi ? "animate-bounce" : ""} hover:none `}
            onClick={handleClick}
            disabled={isSubmittingAi || promptValue === ""}
          >
            {isSubmittingAi ? "Sending.." : "Send"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MiddleBar;
