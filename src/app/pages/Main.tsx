"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import ChatArea, { Message } from "../components/ChatArea";
import { useDynamicRouteParams } from "next/dist/server/app-render/dynamic-rendering";
import dummyMessagesData from "@/DUMMY_DATA/messages.json";

const MainPage = () => {
  const [inputEntered, setInputEntered] = useState<boolean>(false);

  const dummy_messages = dummyMessagesData as Message[];

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const onSubmithandler = () => {
    setInputEntered(true);

    const newMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, newMessage]);

    console.log("BEFORE", messages);

    const agentNewMessage: Message = {
      id: messages.length + 2,
      text: dummy_messages[0].text,
      sender: dummy_messages[0].sender,
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, agentNewMessage]);
      console.log("AFTER", messages);
    }, 500);

    setInput("");
  };

  return (
    <div className="font-sans items-center justify-center min-h-screen p-10 pb-20 gap-16 sm:p-20 flex bg-white text-black">
      <div
        className={`relative flex flex-col h-[90dvh] w-[140dvh] rounded-xl shadow-xl bg-gray-100 p-4 gap-5 items-center justify-center
       }
        `}
      >
        <div className="flex gap-4 absolute top-5 left-5">
          <Image
            src="/DenzingIcon.svg"
            alt="Denzin Logo"
            width={50}
            height={50}
          />
          <Image
            src="/DenzingText.svg"
            alt="Denzin Logo"
            width={200}
            height={200}
          />
        </div>
        {/* 
        <div
          className=" w-[90%]  flex flex-col gap-10 items-center justify-center border border-green-500
        "
        > */}
        {inputEntered ? (
          <div
            className={`flex space-y-3 p-6 overflow-y-auto transition-all ease-in-out duration-500 w-full flex-1
            ${inputEntered ? "opacity-100" : "opacity-0"}
            `}
          >
            <ChatArea messages={messages} inputEntered={inputEntered} />
          </div>
        ) : (
          <div
            className={`flex flex-col gap-6 items-center justify-center transition-all ease-in-out duration-500 
              ${inputEntered ? "opacity-0" : "opacity-100"}`}
          >
            <Image src="/Logo.svg" alt="Denzin Logo" width={200} height={200} />
            <p className="text-3xl"> How can I help you ? </p>
          </div>
        )}

        <div
          className={`flex p-6 gap-2.5 min-w-[1500px] border border-gray-300 rounded-[24px] shadow-lg flex-0 h-24 text-lg transition-all duration-500 ease-in-out
            `}
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSubmithandler();
              }
            }}
            className="bg-transparent border-none outline-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 text-lg flex-1"
            placeholder="Ask Anything"
          />

          <Button
            onClick={onSubmithandler}
            className={`rounded-full h-12 w-12 bg-[#528460] hover:bg-[#528860] hover:cursor-pointer hover:shadow-lg`}
            disabled={!input}
          >
            <ArrowRight />
          </Button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default MainPage;
