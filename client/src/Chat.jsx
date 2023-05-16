import { useEffect, useState } from "react";
import Avatar from "./Avatar";

export default function Chat() {
  const [ws, setWs] = useState(null);
  const [onlinePeople, setOnlinePeople] = useState({});

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:4000");
    setWs(ws);
    ws.addEventListener("message", handleMessage);
  }, []);

  function showOnlinePeople(peopleArray) {
    const people = {};
    peopleArray.forEach(({ userId, username }) => {
      people[userId] = username;
    });
    setOnlinePeople(people);
  }

  function handleMessage(ev) {
    const messageData = JSON.parse(ev.data);
    if ("online" in messageData) {
      showOnlinePeople(messageData.online);
    }
  }

  return (
    <div className="flex h-screen">
      <div className="bg-white w-1/3 pl-4 pt-4">
        <div className="text-indigo-600 font-bold flex gap-2 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z"
              clipRule="evenodd"
            />
          </svg>
          ChatApp
        </div>
        {Object.keys(onlinePeople).map((userId) => (
          <div
            key={userId}
            className="border-b border-gray-100 py-2 flex items-center gap-2 cursor-pointer"
          >
            <Avatar username={onlinePeople[userId]} userId={userId} />
            <span className="text-gray-700"> {onlinePeople[userId]}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col bg-blue-50 w-2/3 p-2">
        <div className="flex-grow">message with selected person</div>
        <div className="flex gap-2 ">
          <input
            type="text"
            placeholder="Type your message here"
            className="bg-white flex-grow rounded-sm border p-2"
          />
          <button className="bg-blue-500 p-2 rounded-lg text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}
