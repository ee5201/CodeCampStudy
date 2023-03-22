import { useState } from "react";
import { IBoard } from "../../../../commons/types/generated/types";

interface Iprops {
  el: IBoard;
}

export default function CommentEdit(props: Iprops) {
  const [myindex, setmyindex] = useState(false);

  const onClickedit = () => {
    setmyindex(true);
  };
  return (
    <div>
      {!myindex && (
        <div>
          <span>{props.el.title}</span>
          <span>{props.el.contents}</span>
          <button onClick={onClickedit}>수정하기</button>
        </div>
      )}
      {myindex && (
        <>
          수정할 내용:
          <input />
        </>
      )}
    </div>
  );
}
