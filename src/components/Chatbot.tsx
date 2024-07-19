import { useState } from "react";
import { FaRobot } from "react-icons/fa";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      content:
        "Hello there! I am CodeX your friendly bot 👋. Looking for anything specific? I can help you to find the services you're looking for 👇👇👇",
      isUser: false,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setMessages([
        ...messages,
        { id: messages.length + 1, content: inputValue, isUser: true },
      ]);
      setInputValue("");
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            id: prevMessages.length + 1,
            content:
              "I'm sorry, I don't have enough information to answer that. Could you please provide more details?",
            isUser: false,
          },
        ]);
      }, 1000);
    }
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? (
        <div className="fixed bottom-4 right-4 w-full max-w-md mx-auto shadow-lg">
          <div className="flex flex-col h-[90vh] max-w-2xl mx-auto bg-white dark:bg-gray-950 rounded-2xl shadow-lg">
            <header className="bg-primary text-white px-4 py-3 flex items-center justify-between rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-primary">
                  C
                </div>
                <h2 className="text-lg font-bold">CodeX</h2>
              </div>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              // This is the button that toggles the Chatbot
<button
  onClick={toggleChatbot}
  className="rounded-full p-3 bg-blue-600 text-white shadow-lg"
  aria-label="Toggle Chatbot"  // Providing an accessible name
>
  <FaRobot className="w-6 h-6" />
</button>

              </div>
            </header>

            <div className="flex-1 overflow-auto p-4 bg-white dark:bg-gray-950">
              <div className="flex flex-col gap-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.isUser ? "justify-end" : ""
                    } items-start gap-3`}
                  >
                    {!message.isUser && (
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-3xl font-bold text-white">
                        C
                      </div>
                    )}
                    <div
                      className={`${
                        message.isUser
                          ? "bg-primary text-white"
                          : "bg-gray-100 dark:bg-gray-900"
                      } rounded-2xl p-3 max-w-[70%]`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                    {message.isUser && (
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-3xl font-bold text-white">
                        U
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-900 p-3 flex items-center rounded-b-2xl">
              <form
                onSubmit={handleSubmit}
                className="flex items-center w-full space-x-2"
              >
                <textarea
                  id="message"
                  placeholder="Type your message..."
                  className="flex-1 resize-none border-none outline-none text-sm rounded-lg p-2 ml-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white"
                  value={inputValue}
                  onChange={handleInputChange}
                  autoComplete="off"
                  rows={2}
                  style={{ height: "auto" }}
                />
                <button
                  type="submit"
                  className="bg-primary text-white rounded-full p-2"
                >
                  <SendIcon className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed bottom-4 right-4">
          <button
            onClick={toggleChatbot}
            className="rounded-full p-3 bg-blue-600 text-white shadow-lg"
          >
            <FaRobot className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  );
}

function SendIcon(props: any) {
  return (
    <svg
      {...props}
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}
