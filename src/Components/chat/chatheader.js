import React from 'react';

const ChatHeader = props => {
    return ( 
        <div className="flex-initial p-2 border-b-teal-800/50 border-b-2">
            <h2 className="text-lg font-black inline"># {props.channelName}</h2>
            <span className="ml-2 text-gray-200/75">{props.channelDescription}</span>
        </div> 
    )
}

export default ChatHeader;