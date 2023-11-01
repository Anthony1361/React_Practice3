import React, { useEffect, useState } from "react";

// useEffect with incorrect dependency ..//
function IntervalHookCounter() {

    const [count, setCount] = useState(0)

    const tick = () => {
        // another method and  count will be removed from [] because of this method ... //
        setCount(prevCount => prevCount + 1)
        // ................//

        // setCount(count + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        // the cleanup like the componentWillUnmount ...///
        return () => {
            clearInterval(interval)
        }
        // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

        // if u want the interval to set once on initial render, use [] as equivalent to componentDidMount,
        // but if u add count [count], it will start counting
    }, [])

    return(
        <div>
          {count}
        </div>
    )
}

export default IntervalHookCounter