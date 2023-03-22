import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 20%;
  color: red;
`;
export default function StaticeRoutedPage() {
  const [myindex, setmyindex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickedit = (event: MouseEvent<HTMLButtonElement>) => {
    const qqq = [...myindex];
    qqq[Number(event.currentTarget.id)] = true;

    setmyindex(qqq);
  };
  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          {myindex[index] === false && (
            <div>
              <Column>{el.title}</Column>
              <Column>{el.contents}</Column>
              <button id={String(index)} onClick={onClickedit}>
                수정하기
              </button>
            </div>
          )}
          {myindex[index] === true && (
            <>
              수정할 내용:
              <input />
            </>
          )}
        </div>
      ))}
    </>
  );
}
