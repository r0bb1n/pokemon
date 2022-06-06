import {useState} from 'react'




const Attack = () => {
  const [count, setCount] = useState(100)
    const [counte, setCounte] = useState(100)

  const x = (min, max) => Math.floor(Math.random() * (max - min - 1));
  

  function decrement() {
      if(count <= 0) {
          return(
              alert('Game is over, Player one wins')
          )
      } else {
        setCount(prevCount => prevCount - x(-30, -10));
      }
      
  }

  function lower() {
      if(counte <= 0) {
          return(
              alert('Game is over, Player two wins')
          )
      } else {
          setCounte(prevcount => prevcount - x(-30, -10));
      }
  }

  
  
    return (
    <div className="attack">
        <div className="stuff">
            <h2>HP: {counte}/100</h2>
            <progress id="health" value={counte} max="100"></progress>
            <button onClick={decrement}>Attack</button>
        </div>
        <div className="stuff">
            <h2>HP: {count}/100</h2>
            <progress id="healthe" value={count} max="100"></progress>
            <button onClick={lower}>Attack</button>
        </div>
    </div>
  )
}



export default Attack