import React, { forwardRef, useState } from "react";

const useMessageBinder = (initial, ref) => {
    const [currentMessage, setCurrentMessage] = useState(initial);
    
    return [currentMessage,() => setCurrentMessage(() => ref.current.value)];
}
export default useMessageBinder;