import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import AddChannelModal from "./addChannelModal";
import { ChatBox } from "./chat";

const SidebarLeft = ({
  clickEvent,
  showChannels,
  channels,
  addChannel,
  channelGrab,
}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={showChannels ? "w-1/6" : "flex-initial"}>
      <div className="flex flex-col px-2 h-full">
        <div>
          <button className="float-right text-3xl" onClick={clickEvent}>
            ↔
          </button>
        </div>
        <div className="mt-2">
          {showChannels === true
            ? typeof channels !== "string"
              ? channels.map((channel, i) => (
                  <li className="text-lg w-full hover:bg-[#3b5166]">
                    <button className="font-bold" id={i} onClick={() => channelGrab(channel.name)}>
                      # {channel.name}
                    </button>
                    <Tippy content={<span>{channel.description}</span>}>
                      <span className="float-right ml-1 text-gray-200/75 px-2 font-black hover:bg-[#41586e]">
                        ?
                      </span>
                    </Tippy>
                  </li>
                ))
              : channels
            : null}
        </div>

        <div className={!showChannels ? "hidden" : channels.length !== 0 ? 'mt-auto' : null}>
          <button
            className="bg-neutral text-primary text-lg rounded-full font-extrabold p-3"
            onClick={() => setShowModal(!showModal)}
          >
            New Channel
          </button>
          <AddChannelModal
            className={showModal ? "block" : "hidden"}
            modalClose={() => setShowModal(false)}
            addChannel={addChannel}
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarLeft;
