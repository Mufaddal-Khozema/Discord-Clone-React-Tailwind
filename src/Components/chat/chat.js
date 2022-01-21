import React from 'react';

const Chat = props => {
    return (
        <div className="flex flex-col flex-auto w-1/2 bg-secondary">
          {props.children !== null ? props.children : (<h2 className='text-2xl font-extrabold p-20 text-center'>Try adding a channel!</h2>)}
       </div>
    )
}

export default Chat