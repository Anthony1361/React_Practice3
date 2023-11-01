import React, { useState } from "react";
import HookMouse from "./HookMouse";

// useEfect with cleanup ..//
function HookMouseContainer() {

    const [display, setDisplay] = useState(true)

    return(
        <div>
          <button onClick={() => setDisplay(!display)}>Toggle display</button>
          {/* if the display value is true we render the HookMouse */}
          {display && <HookMouse></HookMouse>}
        </div>
    )
}

export default HookMouseContainer