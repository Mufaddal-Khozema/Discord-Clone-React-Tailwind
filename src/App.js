import React, { useState } from "react";
import { Chat, ChatHeader, Chats, ChatBox } from "./Components/chat";
import { SidebarLeft, SidebarRight } from "./Components";
import { useSidebars, useMessageBinder } from "./Components/hooks";

import Tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

export default function App() {
  const [channels, setChannels] = useState([]);
  const [currentChannelName, setCurrentChannelName] = useState("");
  const chatInput = React.createRef();
  const [currentMessage, setCurrentMessage] = useMessageBinder("", chatInput);

  const screenOk = (pixelwidth) =>
    window.screen.width > pixelwidth ? true : false;

  const [showSidebarLeft, setShowSidebarLeft] = useSidebars(screenOk(917));
  const [showSidebarRight, setShowSidebarRight] = useSidebars(screenOk(760));

  const addChannel = (channelName, channelDesc) => {
    const tempChannel = {
      name: channelName,
      description: channelDesc,
      messages: [],
    };
    setChannels([...channels, tempChannel]);
    setCurrentChannelName(channelName);
  };

  const findChannel = channelName => {
    if (channels !== []) { 
      for (let i = 0; i < channels.length; i++){
        if (channels[i].name === channelName) {
          return i
        }
      }
    }
  }

  const pickChannel = channelName => {
    setCurrentChannelName(channelName, console.log(currentChannelName))
  }

  const addMessage = () => {
    let channelchanged = channels;
    channelchanged[findChannel(currentChannelName)].messages.push(currentMessage);
    if (currentMessage !== "") setChannels(channelchanged);
    setCurrentMessage("");
    chatInput.current.value = "";
  };

  const removeMessage = (e) => {
    let channelchanged = channels;
    var index = channelchanged[findChannel(currentChannelName)].messages.indexOf(e);
    channelchanged[findChannel(currentChannelName)].messages.splice(index, 1);
    setChannels(channelchanged);
  };

  const handleEnterKeyPress = (e) => (e.charCode === 13 ? addMessage() : null);

  const channelsEmpty = () => (channels.length !== 0 ? true : false);

  return (
    <div className="flex text-neutral h-screen list-none bg-primary">
      <SidebarLeft
        showChannels={showSidebarLeft}
        clickEvent={setShowSidebarLeft}

        channels={channels}
        addChannel={addChannel}
        channelGrab={pickChannel}
      />

      <Chat showChat={channelsEmpty}>
        {channelsEmpty() ? (
          <>
            <ChatHeader
              channelName={channels[findChannel(currentChannelName)].name}
              channelDescription={channels[findChannel(currentChannelName)].description}
            />

            <Chats 
              messages={channels[findChannel(currentChannelName)].messages}
              remove={removeMessage}
            />

            <ChatBox
              keyPress={handleEnterKeyPress}
              ref={chatInput}
              messageBind={setCurrentMessage}
              message={addMessage}
            />
          </>
        ) : null}
      </Chat>

      <SidebarRight
        sidebarStatus={showSidebarRight}
        clickEvent={setShowSidebarRight}
      />
    </div>
  );
}
