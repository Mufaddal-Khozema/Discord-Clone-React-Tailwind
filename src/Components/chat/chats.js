import React, { useState } from "react";
import moment from "moment";
import { DotsVerticalIcon } from "@heroicons/react/solid";

const Chats = ({messages, remove}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [clickedId, setClickedId] = useState("");
  return (
    <div className="flex-auto flex flex-col-reverse p-2 overflow-y-auto w-auto h-auto">
      <div>
        {messages.map((message, id) => (
          <li id={id} className="hover:bg-[#3b5166] py-0.5">
            {message}
            <span className="text-gray-200/50 text-sm ml-2">
              {() => {
                const newTime = moment().format();
                return newTime;
              }}
            </span>
            <button
              onClick={() => {
                setClickedId(message);
                setShowDropdown(!showDropdown);
              }}
              className="float-right"
            >
              <DotsVerticalIcon className="h-5 w-5 text-gray-200/40 hover:text-gray-200/60" />
              <div
                className={
                  clickedId === message && showDropdown ? "absolute" : "hidden"
                }
              >
                <span onClick={remove} className="hover:bg-[#3b5166] drop-shadow-lg rounded-md p-2 bg-secondary text-neutral">
                  Remove Message
                </span>
              </div>
            </button>
          </li>
        ))}
      </div>
    </div>
  );
};
export default Chats;
