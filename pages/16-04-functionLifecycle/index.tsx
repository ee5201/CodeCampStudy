import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";

export default function ClassCounterPage() {
  const [count, setcount] = useState(0);
  const Router = useRouter();

  const OnclickUp = () => {
    setcount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("그려지고나서 실행");
  }, []); // [] 의존성 배열  //처음에도 실행 됨 //조건 걸수 있다 //count가 변경 되었을 때만 실행

  useEffect(() => {
    console.log("변경 후 실행");
  }); // [] 의존성 배열  //처음에도 실행 됨 //조건 걸수 있다 //count가 변경 되었을 때만 실행

  useEffect(() => {
    return () => {
      console.log("사라질때 실행");
    };
  }, []); // [] 의존성 배열  //처음에도 실행 됨 //조건 걸수 있다 //count가 변경 되었을 때만 실행

  // 1. 하나로 합치기 가능히다

  // useEffect(() => {
  //   console.log("그려질때 실행");
  //   return () => {
  //     console.log("사라질때 실행");
  //   };
  // }, []);

  // //2. useEffect 잘못된 사용예제
  // useEffect(() => {
  //   setcount((prev) => prev + 1); //2번 렌더링 하게 된다 setcount를 사용하게 된다면 가급적 자제하라
  // }, []);
  console.log("찾아줭");

  const OnClickmove = () => {
    void Router.push("/");
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={OnclickUp}>카운트 올리기 </button>
      <button onClick={OnClickmove}>이동하기</button>
    </>
  );
}

// class AAA {
//   power = 50;

//   attack() {}
// }

// class BBB extends AAA { => 상속
//   run() {}
// }

// const mybbb= new BBB()
// mybbb.
