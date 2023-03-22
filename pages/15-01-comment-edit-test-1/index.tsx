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
  const [myindex, setmyindex] = useState(1);
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickedit = (event: MouseEvent<HTMLButtonElement>) => {
    setmyindex(Number(event.currentTarget.id));
  };
  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          {index !== myindex && (
            <div>
              <Column>{el.title}</Column>
              <Column>{el.contents}</Column>
              <button id={String(index)} onClick={onClickedit}>
                수정하기
              </button>
            </div>
          )}
          {index === myindex && (
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
