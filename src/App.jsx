import DescreaseButton from "./components/buttons/DescreaseButton"
import IncreaseButton from "./components/buttons/IncreaseButton"
import React, { useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  
  const Increase = () => {
    setCount(count + 1)
  }
  
  const Descrease = () => {
    setCount(count - 1)
  } 
  
  return (
    <>
   <div style={{height: "100vh",
     display: "flex",
     flexDirection: "column",
     justifyContent: "center",
     alignItems: "center",
     gap: "20px",}}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <div style={{display:"flex",gap:"15px"}}>
        <button onClick={Increase}>+</button>
        <button onClick={Descrease}>-</button>
      </div>
   </div>
   <IncreaseButton onIncrease={Increase} />
   <DescreaseButton onDescrease={Descrease} /> 
  </>
  )
}

export default App
