import React, { useEffect, useState } from "react";

// run effects only once ..//
function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log("Mouse Event")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("useEffect called")
        window.addEventListener("mousemove", logMousePosition)
        // cleanup function or code, can be cancelling subscriptions,timers or even removing event handlers, like we seen
        return () => {
            console.log("component unmounting code")
            window.removeEventListener("mousemove", logMousePosition)
        }   
        // ............................. //
        // [] it was added to make the effects independent of any props or state, won't be called on re-renders
    }, [])

    return(
        <div>
          Hooks X - {x} Y - {y}
        </div>
    )
}

export default HookMouse