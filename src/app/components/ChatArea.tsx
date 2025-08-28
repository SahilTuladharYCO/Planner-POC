import ChatBubble from "./ChatBubble";
import { useEffect, useRef } from "react";

export type Message = {
  id?: number;
  text: string;
  sender: "user" | "agent";
};

interface ChatAreaProps {
  inputEntered: boolean;
  messages: Message[];
}

const ChatArea = ({ inputEntered, messages }: ChatAreaProps) => {
  
  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    chatEndRef.current?.scrollIntoView({behavior: "smooth"})

  } , [messages])

  return (
    <div className=" w-full flex flex-col gap-5 justify-end">
      {messages.map((msg) => (
        <div 
        key={msg.id}
        className={`flex
        ${msg.sender === "user" 
            ? "justify-end"
            : "justify-start"
        }
        `}>
          <ChatBubble  text={msg.text} sender={msg.sender} />
        </div>
      ))}
      
      <div ref={chatEndRef}/>
    </div>
  );
};

export default ChatArea;
