import { useState } from "react";
import Child1 from "../../src/commons/utils/14-liftingStateUp/Child1";
import Child2 from "../../src/commons/utils/14-liftingStateUp/Child2";

export default function LiftingStateUP() {
  const [count, setCount] = useState(0);

  const OnclickCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <Child1 count={count} OnclickCount={OnclickCount} setCount={setCount} />
      <div>==========</div>
      <Child2 count={count} OnclickCount={OnclickCount} setCount={setCount} />
    </>
  );
}
