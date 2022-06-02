import React from 'react'
import {useState} from 'react'

const Attack = (max, min) => {
  const [count, setCount] = useState(100)

  function decrement() {
      setCount(prevCount => prevCount - 1)
  }

  
  
    return (
    <div className="attack">
        <div>
            <h1>{count}</h1>
            <progress id="health" value={count} max="100"></progress>
            <button onClick={decrement}>Attack</button>
        </div>
        <div>
            <h1>{count}</h1>
            <progress id="health" value={count} max="100"></progress>
        </div>
    </div>
  )
}

export default Attack