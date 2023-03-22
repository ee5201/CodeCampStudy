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
  const [myindex, setmyindex] = useState();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onclickedit = (event: MouseEvent<HTMLButtonElement>) => {
    setmyindex(Number(event.currentTarget.id));
  };

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          {index !== myindex && (
            <div>
              <Row key={el._id}>
                <Column>{el.title}</Column>
                <Column>{el.contents}</Column>
                <button id={String(index)} onClick={onclickedit}>
                  수정하기{" "}
                </button>
              </Row>
            </div>
          )}
          {index === myindex && (
            <div>
              수정할 내용: <input type="text" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
