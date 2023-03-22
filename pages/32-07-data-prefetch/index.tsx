import { gql, useApolloClient, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
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

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
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
  const router = useRouter();
  const client = useApolloClient();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  // const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
  //   void refetch({ page: Number(event.currentTarget.id) });
  // };

  const prefetchBoard = (boardId: string) => async () => {
    await client.query({
      query: FETCH_BOARDS,
      variables: { boardId },
    });
    console.log("클릭됨");
  };

  const OnclickMove = (boardId: string) => () => {
    void router.push(`/32-08-data-prefetch-moved/${boardId}`);
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>{el.title}</Column>
          <Column
            onMouseOver={prefetchBoard(el._id)}
            onClick={OnclickMove(el._id)}
          >
            {el.contents}
          </Column>
        </Row>
      ))}
    </>
  );
}
