import { useState } from "react";
import { IBoard } from "../../../../commons/types/generated/types";

interface Iprops {
  el: IBoard;
}

export default function BoardCommentItem(props: Iprops) {
  const [isedit, setisedit] = useState(false);
  const onclickedit = () => {
    setisedit(true);
  };
  return (
    <div>
      {!isedit && (
        <div>
          <div>
            <div>{props.el?.title}</div>
            <div>{props.el?.contents}</div>
            <button onClick={onclickedit}>수정하기 </button>
          </div>
        </div>
      )}
      {isedit && (
        <div>
          수정할 내용: <input type="text" />
        </div>
      )}
    </div>
  );
}
