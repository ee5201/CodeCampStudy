export function useMyState<S>(aaa: S): [S, () => void] {
  const mystate = aaa; /// aaa를 사용해서 state의 초기값 설정
  const mySetState = (bbb) => {
    console.log(`${mystate}에서 ${bbb} 로 state를 변경하겠씁니다!!`); //1. bbb로 mystate변경하기
    console.log(`변경된 ${bbb}  "를 사용해서 컴포넌트를 리렌더링하겠습니다`);
    //2. 해당 컴포넌트를 리렌더링 시키기 !!!(render 함수 )
  };
  return [mystate, mySetState];
}
// 사용자
const [count, setCount] = useMyState<number>();
