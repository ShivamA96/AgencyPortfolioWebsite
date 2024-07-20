import React, { useState, useEffect, useRef } from "react";
// import "tailwindcss/tailwind.css";

const ChatBot = () => {
  const [pluginVisible, setPluginVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const contentRef = useRef(null);

  useEffect(() => {
    addMessage(
      "Welcome to the Tailwind-powered WebSim AI with enhanced readability and managed suggestion buttons! Our quill icon represents our commitment to clear communication through efficient Tailwind classes. How can I help make your web content more readable and user-friendly with Tailwind CSS today?"
    );
    setSuggestions([
      "Analyze Tailwind Site",
      "Readability Classes",
      "Dark Mode Setup",
      "Responsive Typography",
      "Tailwind Config Tips",
    ]);
  }, []);

  const togglePlugin = () => {
    setPluginVisible(!pluginVisible);
  };

  const addMessage = (text, isUser = false) => {
    setMessages((prevMessages) => [...prevMessages, { text, isUser }]);
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.scrollTop = contentRef.current.scrollHeight;
      }
    }, 100);
  };

  const handleInput = (userInput = inputValue.trim()) => {
    if (userInput) {
      addMessage(userInput, true);
      setInputValue("");

      setTimeout(() => {
        let response;
        if (
          userInput.toLowerCase().startsWith("http") ||
          userInput.toLowerCase().includes(".")
        ) {
          response = `Analyzing webpage: ${userInput} with Tailwind-optimized readability. Our enhanced WebSim AI now offers Tailwind class suggestions for optimized contrast ratios, typography recommendations for better legibility, and layout class suggestions to reduce eye strain. Which aspect of Tailwind-based readability would you like me to focus on?`;
          setSuggestions([
            "Tailwind Contrast",
            "Typography Classes",
            "Layout Optimization",
            "Dark Mode Classes",
          ]);
        } else {
          response = `As the Tailwind-focused WebSim AI, I can provide insights on Tailwind typography classes, color contrast utilities, content structure best practices, and other factors that enhance text comprehension and user experience using Tailwind CSS. How can I help improve the readability of your Tailwind-based web project?`;
          setSuggestions([
            "Tailwind Typography",
            "Color Utilities",
            "Responsive Classes",
            "Accessibility Tips",
            "Custom Theming",
          ]);
        }
        addMessage(response);
      }, 1000);
    }
  };

  return (
    <div className="bg-[#0a1929] text-gray-200 font-roboto min-h-screen flex items-center justify-center z-50 absolute">
      <button
        id="websim-toggle"
        className={`fixed bottom-5 right-5 bg-gradient-to-r from-[#6a37bb] to-[#ff5d5d] text-white p-4 rounded-full cursor-pointer shadow-lg  transition-transform duration-300 hover:scale-110 flex items-center justify-center ${
          pluginVisible ? "hidden" : ""
        }`}
        onClick={togglePlugin}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
          <line x1="16" y1="8" x2="2" y2="22"></line>
          <line x1="17.5" y1="15" x2="9" y2="15"></line>
        </svg>
      </button>
      <div
        id="websim-plugin"
        className={`fixed bottom-5 right-5 w-[30em] h-[40em] bg-[#0d2137] rounded-2xl shadow-xl overflow-hidden transition-all duration-300 flex flex-col ${
          pluginVisible ? "" : "hidden"
        }`}
      >
        <div
          id="websim-header"
          className="bg-gradient-to-r from-[#ff5d5d] to-[#6a37bb] text-white p-4 font-medium flex justify-between items-center shadow-md"
        >
          <span>WebSim AI</span>
          <button
            id="websim-close"
            className="text-lg transition-transform duration-300 bg-transparent hover:rotate-180"
            onClick={togglePlugin}
          >
            X
          </button>
        </div>
        <div
          id="websim-content"
          className="flex-grow overflow-y-auto p-5 bg-[#0f2940] flex flex-col space-y-4"
          ref={contentRef}
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-lg shadow max-w-[80%] ${
                msg.isUser ? "self-end bg-[#2c5282]" : "self-start bg-[#1a3a5c]"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div
          id="websim-input-container"
          className="p-4 bg-[#0d2137] flex flex-col space-y-4"
        >
          <div id="websim-suggestions" className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, idx) => (
              <button
                key={idx}
                className="bg-[#1a3a5c] text-white px-3 py-2 rounded-full text-sm transition-colors duration-300 hover:bg-[#2c5282] flex-grow"
                onClick={() => handleInput(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
          <div id="websim-input" className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Enter a URL or ask a question..."
              className="flex-grow p-2 rounded-full bg-[#1a3a5c] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleInput();
                }
              }}
            />
            <button
              className="bg-[#2c5282] text-white p-2 rounded-full transition-colors duration-300 hover:bg-[#3182ce]"
              onClick={() => handleInput()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
