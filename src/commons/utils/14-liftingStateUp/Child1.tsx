export default function Child1(props: any) {
  return (
    <>
      <div>자식 :{props.count}</div>
      <button onClick={props.OnclickCount}>카운트 올리기</button>
    </>
  );
}
