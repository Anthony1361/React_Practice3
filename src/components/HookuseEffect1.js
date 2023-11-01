import React, { useEffect, useState,  } from "react";

// useEffect after render .../
function HookuseEffect() {

    const [count, setCount] = useState(0)

    // the parameter inside this useEffect is a function which gets executed after every render of the component ..//
    // use arrow function which updates the document title
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

   return(
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
   ) 
}

export default HookuseEffect