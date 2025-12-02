import React from 'react'

  export default function IncreaseButton ({onIncrease}) {
  return (
    <>
    <button onClick={onIncrease}
    style={{backgroundColor: "green"}}>+</button>
    </>
  );
}


