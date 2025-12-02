import DescreaseButton from "./components/buttons/DescreaseButton"
import IncreaseButton from "./components/buttons/IncreaseButton"
import React, { useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  
  const Increase = () => {
    setCount(count + 1)
  }
  
  const Descrease = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  } 
  
  return (
    <>
      <div style={{
        height: "30vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
      }}>
        <h1>Counter App</h1>
        <h1>{count}</h1>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px"
      }}>
        <IncreaseButton onIncrease={Increase} />
        <DescreaseButton onDescrease={Descrease} />
      </div>
    </>
  )
}

export default App
