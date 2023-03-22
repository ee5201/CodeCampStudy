import { useState } from "react";

export default function Counterstatedocumentpage() {
  const [count, setCount] = useState(0); //기존 방식 : let count =0;

  function handleClickCountUp() {
    setCount((prev) => prev + 1);
  } // 기존방식: count += 1;

  return (
    <div>
      <div role="count">{count}</div>
      <button role="CB" onClick={handleClickCountUp}>
        {" "}
        버튼 올리기
      </button>
    </div> //fragment
  );
}
