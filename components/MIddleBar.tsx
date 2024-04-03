"use client";
// @ts-nocheck

import { useState, useRef, useEffect } from "react";
import { toast } from "./ui/use-toast";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import AIlogo from "@/public/Ailogo";
import Image from "next/image";

interface Message {
  text: string;
  byUser: boolean;
}

const MiddleBar = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [promptValue, setPromptValue] = useState<string>("");
  const [isSubmittingAi, setIsSubmittingAi] = useState<boolean>(false);
  const messageContainerRef = useRef<HTMLDivElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPromptValue(event.target.value);
  };

  const handleClick = () => {
    if (promptValue.trim() === "") return;
    setIsSubmittingAi(true);

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: promptValue, byUser: true },
    ]);
    generateAiAnswer(promptValue);
    setPromptValue("");
  };

  const generateAiAnswer = async (prompt: string) => {
    const newprompt =
      "your name is GenZbot you  reply the answer in Genz language use emoji and slangs words your motive is to give the answer that user shock and if anyone ask who is your developer you reply my developer is ALOK-MISHRA and according to that answer my question " +
      prompt;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/bard`,
        {
          method: "POST",
          body: JSON.stringify({ question: newprompt }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const aiAnswer = await response.json();
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: aiAnswer.text, byUser: false },
      ]);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error generating AI answer ⚠️",
        variant: "destructive",
      });
    } finally {
      setIsSubmittingAi(false);
    }
  };

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col justify-center items-center w-full max-w-screen-md h-screen mp-4">
        <div
          ref={messageContainerRef}
          className="w-full h-full mb-1 overflow-y-auto"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 ${message.byUser ? "text-right" : "text-left"}`}
            >
              {message.byUser ? (
                ""
              ) : (
                <Image
                  src={AIlogo}
                  width={20}
                  height={20}
                  alt="AIlogo"
                  className="flex mb-2"
                />
              )}
              <span
                className={`inline-block p-2 rounded-xl mt-3 ${
                  message.byUser ? "bg-purple-700/20" : "bg-gray-900/20"
                }`}
              >
                {message.text}
              </span>
            </div>
          ))}

          {isSubmittingAi && (
            <div className="flex items-center text-purple-500 text-lg animate-pulse">
              Loading...
            </div>
          )}
        </div>
        <div className="w-full flex flex-row items-center justify-center border-[2px] rounded-2xl border-purple-700 mb-2">
          <Textarea
            placeholder="Enter your prompt"
            id="prompt"
            style={{ minHeight: "12px" }}
            value={promptValue}
            className="outline-none focus:outline-none p-3 m-3"
            onChange={handleChange}
          />
          <Button
            className={`${isSubmittingAi ? "animate-bounce" : ""} hover:none`}
            onClick={handleClick}
            disabled={isSubmittingAi || promptValue.trim() === ""}
          >
            {isSubmittingAi ? "Sending.." : "Send"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MiddleBar;
