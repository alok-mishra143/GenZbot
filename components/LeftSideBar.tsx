"use client";
import React, { useState } from "react";
//@ts-ignore
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { prompts } from "@/lib/prompt";

const LeftSideBar = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="hidden flex-col w-1/4 p-4 left-0 sm:flex">
      <div className="mb-4">
        <h2 className="text-white text-lg font-bold mb-2">Prompts for Works</h2>
        <Accordion type="single" collapsible>
          {prompts.map((prompt, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{prompt.tittle}</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col ">
                  {prompt.value}
                  <CopyToClipboard text={prompt.value} onCopy={handleCopy}>
                    <button
                      className={`${
                        copied ? "bg-slate-600" : "bg-slate-900"
                      } text-white px-4 py-2 rounded focus:outline-none mt-2`}
                    >
                      {copied ? "Copied!" : "Copy Prompt"}
                    </button>
                  </CopyToClipboard>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default LeftSideBar;
