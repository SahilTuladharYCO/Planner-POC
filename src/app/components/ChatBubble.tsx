import { Button } from "@/components/ui/button";

interface ChatBubbleProps {
  text: string;
  sender: "user" | "agent";
}

const ChatBubble = ({ text, sender }: ChatBubbleProps) => {
  return (
    <div className={`p-3 rounded-lg flex flex-col  max-w-[700px] gap-3 text-wrap break-words
    ${
        sender === "user"
        ? "border-2 border-green-300 bg-green-100"
        : "bg-gray-200 border border-gray-300"
    }
    `}>
        {text}

        {
            sender === "agent" && (
                <Button
                className="bg-green-200 text-black border border-green-400 w-21 flex items-center justify-center hover:border-green-500 hover:bg-green-300 transition-all duration-200 ease-in-out hover:cursor-pointer "
                >
                    Approve
                </Button>
            )
        }
    
    </div>
  )
 
};

export default ChatBubble;
