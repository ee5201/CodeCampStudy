import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent, MouseEvent } from "react";
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
const SpanT = styled.div`
cusor:pointer:
`;

export default function StaticeRoutedPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage =
    (boardId: number) => (event: MouseEvent<HTMLSpanElement>) => {
      void refetch({ page: boardId });
    };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>{el.title}</Column>
          <Column>{el.contents}</Column>
        </Row>
      ))}
      {Array(10)
        .fill(1)
        .map((_, index) => (
          <span key={index + 1} onClick={onClickPage(index + 1)}>
            {index + 1}
          </span>
        ))}
    </>
  );
}
