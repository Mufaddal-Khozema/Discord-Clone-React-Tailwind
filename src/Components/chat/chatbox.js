import React from 'react';

const ChatBox = React.forwardRef((props, ref) => {
    return (
        <div>
           <div className="flex flex-auto gap-1 relative w-auto bottom-0 p-1">
             <input 
                ref={ref}
                className="flex-auto bg-[#34495e] focus:outline-none p-1"
                onKeyPress={props.keyPress}
                onChange={props.messageBind}
                placeholder="Say something in chat"
             />
             <input type="submit" onClick={props.message}/>
           </div> 
        </div> 
    )
})

export default ChatBox;