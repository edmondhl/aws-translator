import React, { useState } from "react";
import { sendMessageToLex } from "./lexService";

const Userinput = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;
  
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");
  
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
    }
  };
  

  return (
    
    <div className="flex flex-col h-screen dark:bg-neutral-900 dark:text-white p-4 border border-gray-600">
      <div className="flex-1 overflow-auto p-2 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg ${
              msg.sender === "user" ? "bg-blue-500 ml-auto max-w-1/2" : "bg-gray-700 max-w-1/2"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-2">
        <input
          type="text"
          className="flex-1 p-2 rounded-lg dark:bg-gray-800 border dark:border-gray-600 text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          className="px-4 py-2 bg-blue-600 rounded-lg"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
    
  );
};

export default Userinput;
