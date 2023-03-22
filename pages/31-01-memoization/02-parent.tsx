import { useCallback, useMemo, useState } from "react";
import MemoryChild from "./01-child";
import Child from "./01-child";

export default function Parent() {
  console.log("부모가 렌더링 됩니다!");
  let countLet = 0;
  const [counstState, setCountState] = useState(0);

  // useMemo로 변수 기억하기
  const aaa = useMemo(() => Math.floor(Math.random() + 1), [counstState]);
  console.log(aaa);
  // 2. useCallback으로 함수 기억
  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  // 3. usecallback 사용시 주의사항 => state사용주의

  const onClickCountstate = useCallback(() => {
    setCountState((prev) => prev + 1);
    console.log(counstState + 1);
  }, []);

  // 4. useMemo로 나만의 useCallback 만들어보기
  // const onClickCountstate = useMemo(
  //   () => () => {
  //     setCountState((prev) => prev + 1);
  //     console.log(counstState + 1);
  //   },

  //   []
  // );
  return (
    <>
      <div>===================</div>
      <h1>저는 부모 컴포넌트 입니다.</h1>
      <div>===================</div>
      <div>카운트(let){countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1올리기</button>
      <div>{counstState}</div>
      <button onClick={onClickCountstate}>카운트(State) +1올리기</button>
      <div>{counstState}</div>
      {/* <button
        onClick={() => {
          setCountState((prev) => prev + 1);
          console.log(counstState + 1);
        }}
      >
        카운트(State) +1올리기
      </button> */}
      <div>===================</div>

      <MemoryChild counstState={counstState} />
    </>
  );
}
