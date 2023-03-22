import { useState } from "react";

export default function Counterstatedocumentpage() {
  const result = useState(0);
  function handleClickCountUp() {
    // setCount(1)
    // setCount(2)
    // setCount(3)
    // setCount(4)
    // setCount(5)
    // setCount(6)
    result[1](6);
  }

  return (
    <div>
      <div>{result[0]}</div>
      <button onClick={handleClickCountUp}> 버튼 올리기</button>
    </div> //fragment
  );
}
