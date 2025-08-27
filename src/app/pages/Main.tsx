"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

const MainPage = () => {
  const [inputEntered, setInputEntered] = useState<boolean>(false);

  const onSubmithandler = () => {
    setInputEntered(true);
  };

  return (
    <div className="font-sans items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 flex bg-white text-black">
      <div className=" flex flex-col h-[90dvh] w-[140dvh] rounded-xl shadow-xl bg-gray-100 p-4">
        <div className="flex gap-4">
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
        <div className=" w-[90%] m-auto p-5 flex flex-col gap-10 items-center justify-center">
          <div
            className={`flex flex-col gap-6 items-center justify-center flex-1 transition-all ease-in-out duration-500
            ${inputEntered ? "opacity-0" : "opacity-100"}`}
          >
            <Image src="/Logo.svg" alt="Denzin Logo" width={200} height={200} />
            <p className="text-3xl"> How can I help you ? </p>
          </div>

          <div
            className={`flex flex-start p-6 gap-2.5 min-w-[1500px] border border-gray-300 rounded-[24px] shadow-lg flex-1 text-lg transition-all duration-500 ease-in-out
            ${inputEntered ? "translate-y-[29dvh]" : "translate-y-0"}
            `}
          >
            <Input
              className="bg-transparent border-none outline-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 text-lg "
              placeholder="Ask Anything"
            />

            <Button
              onClick={onSubmithandler}
              className="rounded-full h-12 w-12 bg-[#528460] hover:bg-[#528860] hover:cursor-pointer hover:shadow-lg"
            >
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
