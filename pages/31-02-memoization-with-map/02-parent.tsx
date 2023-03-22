import { useState } from "react";
import Word from "./01-child";
import { v4 as uuidv4 } from "uuid";

export default function Parent() {
  const [data, setdata] = useState("철수는 오늘 점심을 맛있게 먹었습니다.");

  const onclickchange = () => {
    setdata("영희는 오늘 저녁을 맛있게 먹었습니다.");
  };
  return (
    <>
      {/* {data.split(" ").map((el, index) => (
        <Word key={index} el={el} /> // key 또는 el이 변경된 부분만 리렌더링 된다. 
      ))} */}
      {data.split(" ").map((el, index) => (
        <Word key={uuidv4()} el={el} /> // memo를 해도, key 자체가 변경되어 props로 넘어가므로 모두 리렌더링 된다.
      ))}
      <button onClick={onclickchange}>체인지</button>
    </>
  );
}
