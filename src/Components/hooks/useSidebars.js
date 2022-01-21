import { useState } from "react";

const useSidebars = initialState => {
 const [state, setState] = useState(initialState);

 return [
     state,
     () => {setState(!state)}
 ]
}

export default useSidebars;