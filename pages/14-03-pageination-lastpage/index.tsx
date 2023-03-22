import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { MouseEvent, useState } from "react";
import { start } from "repl";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
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

const FETCH_BOARD_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
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

const LastPage = styled.span`
  margin-left: 0.9em;
  text-align: center;
  jusify-content: center;
`;

export default function StaticeRoutedPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARD_COUNT);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  const LastPageO =
    dataBoardCount != null
      ? Math.ceil(dataBoardCount?.fetchBoardsCount / 10)
      : 0;

  const OnclickprevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    void refetch({ page: startPage - 10 });

    // if (startPage < 10) {
    //   return;
    // } else {
    //   setStartPage((prev) => prev - 10);
    //   void refetch({ page: startPage - 10 });
    // }
  };

  const OnclicknextPage = () => {
    if (startPage + 10 <= LastPageO) {
      setStartPage((prev) => prev + 10);
      void refetch({ page: startPage + 10 });
    }
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>{el.title}</Column>
          <Column>{el.contents}</Column>
        </Row>
      ))}
      <span onClick={OnclickprevPage}>이전페이지</span>
      {Array(10)
        .fill(1)
        .map(
          (_, index) =>
            index + startPage <= LastPageO && (
              <LastPage
                key={index + startPage}
                id={index + startPage}
                onClick={onClickPage}
              >
                {index + startPage}
              </LastPage>
            )
        )}
      <span onClick={OnclicknextPage}>다음페이지</span>

      {/* if (index + startPage <= LastPageO) {
            return (
              <LastPage
                key={index + startPage}
                id={index + startPage}
                onClick={onClickPage}
              >
                {index + startPage}
              </LastPage>
            );
          } else {
            return <span> </span>;
          }
        })}
      <span onClick={OnclicknextPage}>다음페이지</span> */}

      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <span key={el} id={String(el)} onClick={onClickPage}>
          {el}
        </span>
      ))} */}

      {/* <SpanT id="1" onClick={onClickPage}>
        1
      </SpanT>
      <SpanT id="2" onClick={onClickPage}>
        2
      </SpanT>
      <SpanT id="3" onClick={onClickPage}>
        3
      </SpanT> */}
    </>
  );
}
