import React, { useState } from "react";

// useState Hook with object .........//
function HookCounter2() {

    const [name, setName] = useState({firstName : "", lastName : ""})

    return(
        <div>
          <form>
            {/* the ...name prvents the firstName from being cleared out while inputing the lastName % vice versa */}
            <input type="text"
              value={name.firstName}
              onChange={(e) => setName({ ...name, firstName : e.target.value})}></input>

            <input type="text"
             value={name.lastName}
             onChange={(e) => setName({ ...name, lastName : e.target.value})}></input>

            <h2>Your first name is - {name.firstName} </h2>
            <h2>Your last name is - {name.lastName} </h2>
            
            <h2> {JSON.stringify(name)} </h2>
          </form>
        </div>
    )
}

export default HookCounter2