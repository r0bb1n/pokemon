import React from 'react'
import {useState} from 'react'

const Attack = () => {
  const [count, setCount] = useState(100)

  function decrement() {
      setCount(prevCount => prevCount - 1)
  }
  
    return (
    <div className="attack">
        <div>
            <h1>{count}</h1>
            <progress id="health" value="100" max="100"></progress>
            <button onClick={decrement}>Attack</button>
        </div>
        <div>
            <h1>{count}</h1>
        </div>
    </div>
  )
}

export default Attack