import React from 'react'
import {useState} from 'react'




const Attack = () => {
  const [count, setCount] = useState(100)

  const x = (min, max) => Math.floor(Math.random() * (max - min - 1));
  

  function decrement() {
      if(count <= 0) {
          return(
              alert('Game is over')
          )
      } else {
        setCount(prevCount => prevCount - x(-30, -10));
      }
      
  }

  
  
    return (
    <div className="attack">
        <div className="stuff">
            <h1>HP: {count}</h1>
            <progress id="health" value={count} max="100"></progress>
            <button onClick={decrement}>Attack</button>
        </div>
    </div>
  )
}



export default Attack