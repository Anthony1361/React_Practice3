import React, { useState, useEffect } from "react";

// conditionally run efects .../
function HookuseEffect2() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    // the parameter inside this useEffect is a function which gets executed after every render of the component ..//
    // use arrow function which updates the document title
    useEffect(() => {
        console.log("useEffect - Updating document title")
        document.title = `You clicked ${count} times`
        // the second parameter which is the count is the conditon useEffect depends on if it changes
    }, [count])

   return(
    <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
   ) 
}

export default HookuseEffect2