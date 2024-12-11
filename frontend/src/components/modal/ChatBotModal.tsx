import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CloseButton from "../ui/CloseButton";
import AutoGrowTextArea from "../ui/AutoGrowTextArea";
import { getVerifiedToken } from "@/lib/cookieService";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
import { CHAT_API } from "@/lib/env";
import SendButton from "../ui/SendButton";

interface ChatBotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  sender: "bot" | "user";
  text: string;
}

const intro = "Hello, I am an my-Brain chatbot. You can ask me anything!";

const ChatBotModal: React.FC<ChatBotModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: intro },
  ]);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>("");

  const handleUserInput = (data: string) => {
    setUserInput(data);
  };

  const handleSendMessage = async () => {
    if (userInput.trim() === "") return;

    const newMessages: Message[] = [
      ...messages,
      { sender: "user", text: userInput },
    ];

    setMessages(newMessages);
    setUserInput("");

    const token = getVerifiedToken();
    if (!token) {
      toast({
        title: "Token is required",
      });
      return;
    }

    try {
      setIsDisabled(true);
      const response = await axios.post(
        CHAT_API,
        { text: userInput },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        const newMessageBox: Message[] = [
          ...newMessages,
          { sender: "bot", text: response.data.message },
        ];
        setMessages(newMessageBox);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error: any) {
      toast({
        title: error.message || "Something went wrong!",
        variant: "destructive",
      });
    } finally {
      setIsDisabled(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/5 backdrop-blur-sm z-50"
        onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, x: 400 }}
            animate={{ scale: 1, x: 0 }}
            exit={{ scale: 0.9, x: 400 }}
            transition={{ duration: 0.5 }}
            className="fixed sm:min-h-[96vh] min-h-[80vh] md:max-w-[60%]  w-full sm:my-5 flex md:right-0 md:top-0 flex-col justify-center md:justify-between md:items-start items-center bg-white/50 rounded-lg dark:bg-black/50 backdrop-blur-lg z-[50]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="top-3 right-1 absolute">
              <CloseButton onClickBtn={onClose} />
            </div>

            {/* Chatbot Container */}
            <div className="relative flex flex-col md:justify-between justify-start w-[100%] sm:min-h-[96vh] min-h-[80vh]  mx-auto bg-white-700  dark:bg-black-200 rounded-lg shadow-lg overflow-hidden">
              {/* Chat Header */}
              <div className="px-4 py-4 dark:text-white text-black font-semibold text-lg shadow border-b-[1px] dark:border-b-white/30 border-b-black/30">
                My Brain Chatbot
              </div>

              {/* Chat Messages */}
              <div className="flex-1 md:max-h-[80vh] max-h-[70vh] overflow-y-auto scrollbar-meteor p-4 space-y-2 bg-white-700 dark:bg-black-200">
                {messages.map((message, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${
                      message.sender === "bot" ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div
                      className={`px-4 py-2 rounded-lg shadow-sm max-w-[75%] overflow-hidden h-full ${
                        message.sender === "bot"
                          ? "bg-blue-500/20 dark:text-white text-black dark:bg-blue-700/20"
                          : "bg-green-500/20 dark:text-white text-black dark:bg-green-700/20"
                      }`}
                    >
                      {message.text.split(" ").map((val, idx) => (
                        <motion.span
                          key={idx}
                          initial={{
                            opacity: 0,
                            scale: 1.05,
                          }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ delay: 0.06 * idx }}
                          className="inline-block"
                        >
                          {val}&nbsp;
                        </motion.span>
                      ))}
                    </div>
                    
                  </motion.div>
                ))}
                {isDisabled && (
                      <div
                        className={"px-4 py-2 rounded-lg shadow-sm min-w-[75%] min-h-[10vh] overflow-hidden h-full animate-pulse  bg-blue-500/20 text-white dark:bg-blue-700/20"}
                      >
                        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full mb-2"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
                      </div>
                    )}
              </div>

              {/* User Input */}
              <div className="px-4 py-2 bg-white-600 dark:bg-black-600 border-t border-gray-300 dark:border-gray-700">
                <div className="flex items-center justify-between space-x-2">
                  <AutoGrowTextArea
                    textAreaValue={userInput}
                    OnTextArea={handleUserInput}
                    placeholder="Type your message..."
                  />
                  <SendButton
                    isDisabled={isDisabled}
                    onClickBtn={handleSendMessage}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ChatBotModal;
