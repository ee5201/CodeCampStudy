import { useState } from "react";

export default function StatePrevPage() {
  const [count, setcount] = useState(0);

  const onclickcountup = () => {
    //1 화살표 함수
    setcount((prev) => prev + 1);

    //2. 함수 선언식
    setcount(function (prev) {
      return prev + 1;
    });

    //3. 함수안에 로직 넣기
    setcount((prev) => {
      //로직 추가 기능
      //if( ) 등
      //for() 등
      return prev + 1;
    });

    //4 매개변수 바꿔보기
    setcount(
      (fjdskalfjsdifslafjdsklfisdafjilsadjfi) =>
        fjdskalfjsdifslafjdsklfisdafjilsadjfi + 1
    );
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onclickcountup}>카운트올리기</button>
    </>
  );
}
