import React, {useState} from "react";

// useState Hook with arrays ...//
function HookCounter3() {

    const [items, setItems] = useState([])
    
    const addItem = () => {
        setItems([...items, 
            {
                id : items.length,
                // the value will be a random number between 1 and 10 ..//
                value : Math.floor(Math.random() * 10) + 1
            }
        ])
    } 
    return(
        <div>
            <button onClick={addItem}>Add a number</button>

          <ul>
           {
            items.map(item => <li key={item.id}> {item.value} </li> )
           }
         </ul> 

        </div>
    )
}

export default HookCounter3