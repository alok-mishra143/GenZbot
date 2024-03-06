"use client";

import React from "react";

const GenzBotFooter = () => {
  return (
    <footer className="  text-white p-8" id="contact">
      <div className="mb-8">
        <p className="text-lg font-bold mb-2">Contact GenzBot:</p>
        <ul className="flex space-x-4">
          <li>
            <a
              href="mailto:your-email@gmail.com"
              className="hover:text-gray-300"
            >
              Email |
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/your_instagram_id/"
              className="hover:text-gray-300"
            >
              Instagram |
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/your_linkedin_id/"
              className="hover:text-gray-300"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <p className="text-lg font-bold mb-2">About GenzBot:</p>
        <p>
          GenzBot is an innovative chatbot designed to interact with users in a
          fun and engaging way, mimicking the language and style of a Gen Z
          individual. With advanced natural language processing, GenzBot can
          understand and respond to a wide range of queries, making interactions
          seamless and enjoyable.
        </p>
        <p>
          Whether you&apos;re looking for information, entertainment, or just a
          friendly chat, GenzBot is here for you. It&apos;s continuously
          learning and evolving to provide a personalized and unique experience
          for each user.
        </p>
        <p>
          Join the conversation with GenzBot and experience the future of
          chatbots! 🚀
        </p>
      </div>

      <div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} GenzBot. All rights reserved.
        </p>
        <p className="text-sm">Built with ❤️ using React and Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default GenzBotFooter;
