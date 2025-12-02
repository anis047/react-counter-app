import React from 'react'

export default function DescreaseButton ({onDescrease}) {
  return (
    <>
    <button onClick={onDescrease}
    style={{backgroundColor: "red",
    }}>-</button>
    </>
  );
}


