import React, { useState, useRef, useEffect } from "react";
import { sendMessageToLex } from "./lexService";

const Userinput = ({ input, setInput }) => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const lexResponse = await sendMessageToLex(input);

      if (lexResponse) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: lexResponse, sender: "bot" },
        ]);
      }
    } catch (error) {
      console.error("Error sending message to Lex:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const messagesBottomRef = useRef(null);

  const scrollToBottom = () => {
    messagesBottomRef.current?.scrollIntoView({ behavior: "auto" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (

    <div className="flex flex-col h-screen bg-white dark:bg-neutral-900 dark:text-white p-4 rounded-4xl">
      <div className="flex-1 overflow-auto overflow-x-hidden p-2 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-2xl text-center w-fit min-w-[5rem] max-w-[50%] ${msg.sender === "user" ? "dark:bg-[rgb(55,82,114)] ml-auto bg-[rgb(153,200,255)] mr-2 animate-flyinleft" : "dark:bg-gray-600 bg-[rgb(192,197,202)] animate-flyinright"
              }`}
          >
            {msg.text}
          </div>
        ))}
        {isLoading && (
          <div className="p-2 justify-center items-center flex">
            <div className="w-6 h-6 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
          </div>
        )}
        <div ref={messagesBottomRef} />
      </div>
      <div className="flex gap-2 mt-2 mb-2 text-lg">
        <input
          type="text"
          className="flex-1 p-2 rounded-xl shadow-[0_5px_20px_#807f7f] border bg-white dark:bg-gray-800 dark:border-2 dark:border-gray-600 dark:shadow-none focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          placeholder="Type your message..."
        />
        <button
          className="px-5 bg-blue-600 rounded-lg text-white hover:pointer"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>

  );
};

export default Userinput;
