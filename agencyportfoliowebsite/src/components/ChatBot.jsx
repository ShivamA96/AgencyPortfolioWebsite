import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const ChatBot = () => {
  const [pluginVisible, setPluginVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [userId, setUserId] = useState(null);
  const [conversationId, setConversationId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const contentRef = useRef(null);
  const API_URL = "http://localhost:8000";

  const togglePlugin = () => {
    setPluginVisible(!pluginVisible);
  };

  const handleUserDetailsSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(`${API_URL}/submitDetails`, {
        name: userDetails.name,
        emailid: userDetails.email,
        phonenum: userDetails.phone,
      });
      setUserId(response.data.id);
      // We'll set the conversationId when we start the first chat
    } catch (error) {
      console.error("Error submitting user details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const addMessage = (text, isUser = false) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: isUser ? "user" : "assistant", content: text },
    ]);
  };

  const handleInput = async () => {
    const userInput = inputValue.trim();
    if (userInput && userId) {
      addMessage(userInput, true);
      setInputValue("");
      setIsLoading(true);

      try {
        // If this is the first message, we don't have a conversationId yet
        const chatEndpoint = conversationId
          ? `${API_URL}/chat/${userId}?conversation_id=${conversationId}`
          : `${API_URL}/chat/${userId}`;

        const response = await axios.post(chatEndpoint, {
          question: userInput,
        });

        // If this was the first message, save the new conversationId
        if (!conversationId && response.data.conversation_id) {
          setConversationId(response.data.conversation_id);
        }

        addMessage(response.data.response, false);
      } catch (error) {
        console.error("Error sending message:", error);
        addMessage("Sorry, there was an error processing your message.", false);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    // Attempt to retrieve userId and conversationId from local storage when the component mounts
    const storedUserId = localStorage.getItem("userId");
    const storedConversationId = localStorage.getItem("conversationId");

    if (storedUserId) {
      setUserId(storedUserId);
    }
    if (storedConversationId) {
      setConversationId(storedConversationId);
    }
  }, []);

  useEffect(() => {
    // Save userId to local storage whenever it changes
    if (userId) {
      localStorage.setItem("userId", userId);
    }
  }, [userId]);

  useEffect(() => {
    // Save conversationId to local storage whenever it changes
    if (conversationId) {
      localStorage.setItem("conversationId", conversationId);
    }
  }, [conversationId]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <div className="bg-[#0a1929] text-gray-200 font-roboto min-h-screen flex items-center justify-center z-50 absolute">
      <button
        id="websim-toggle"
        className={`fixed bottom-5 right-5 bg-gradient-to-r from-[#6a37bb] to-[#ff5d5d] text-white p-4 rounded-full cursor-pointer shadow-lg transition-transform duration-300 hover:scale-110 flex items-center justify-center ${
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
        {!userId ? (
          <form
            onSubmit={handleUserDetailsSubmit}
            className="p-4 flex flex-col space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              className="p-2 rounded-lg bg-[#1a3a5c] text-white"
              value={userDetails.name}
              onChange={(e) =>
                setUserDetails({ ...userDetails, name: e.target.value })
              }
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded-lg bg-[#1a3a5c] text-white"
              value={userDetails.email}
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              className="p-2 rounded-lg bg-[#1a3a5c] text-white"
              value={userDetails.phone}
              onChange={(e) =>
                setUserDetails({ ...userDetails, phone: e.target.value })
              }
              required
            />
            <button
              type="submit"
              className="bg-[#2c5282] text-white p-2 rounded-lg"
              disabled={isLoading}
            >
              {isLoading ? "Starting..." : "Start Chat"}
            </button>
          </form>
        ) : (
          <>
            <div
              id="websim-content"
              className="flex-grow overflow-y-auto p-5 bg-[#0f2940] flex flex-col space-y-4"
              ref={contentRef}
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-lg shadow max-w-[80%] ${
                    msg.role === "user"
                      ? "self-end bg-[#2c5282]"
                      : "self-start bg-[#1a3a5c]"
                  }`}
                >
                  {msg.content}
                </div>
              ))}
              {isLoading && (
                <div className="self-start bg-[#1a3a5c] p-3 rounded-lg shadow max-w-[80%]">
                  <span className="animate-pulse">Thinking...</span>
                </div>
              )}
            </div>
            <div
              id="websim-input-container"
              className="p-4 bg-[#0d2137] flex flex-col space-y-4"
            >
              <div id="websim-input" className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Type your message..."
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
                  onClick={handleInput}
                  disabled={isLoading}
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
          </>
        )}
      </div>
    </div>
  );
};

export default ChatBot;
