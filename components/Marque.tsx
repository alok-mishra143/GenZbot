import React from "react";

const words = [
  "GenzBot",
  "GenzBot",
  "GenzBot",
  "GenzBot",
  "GenzBot",
  "GenzBot",
  "GenzBot",
  "GenzBot",
  "GenzBot",
  "GenzBot",
  "GenzBot",
  "GenzBot",
  "GenzBot",
  "GenzBot",
  "GenzBot",
  "GenzBot",
  "GenzBot",
  "GenzBot",
  "GenzBot",
  "GenzBot",
  "GenzBot",
  "GenzBot",
  "GenzBot",
  "GenzBot",
  "GenzBot",
  "GenzBot",
  "GenzBot",
];

const Marque = () => {
  return (
    <div className="w-full py-10 rounded-t-3xl rounded-tr-3xl  bg-purple-950/40 text-zinc-300/60 mt-5">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10  whitespace-nowrap  overflow-hidden  ">
        {words.map((word, index) => (
          <div key={index}>
            <h1 className="text-[15vw] leading-none font-['Founders_Grotesk_X-Condensed'] uppercase font-semibold Marquee-animation ">
              {word}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marque;
