import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
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
  const [search, setSearch] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(event.currentTarget.id) }); //검색에서 refetch할 때 사용한 search 검색어가 저장되어 있는 상태이므로 추가로 search 포함하지 않아도 됨
  };

  const onClickSearch = () => {
    void refetch({ search: search, page: 1 });
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  return (
    <>
      검색어 입력
      <input type="text" onChange={onChangeInput} />
      <button onClick={onClickSearch}>검색하기</button>
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>{el.title}</Column>
          <Column>{el.contents}</Column>
        </Row>
      ))}
      {Array(10)
        .fill(1)
        .map((_, index) => (
          <span key={index + 1} id={index + 1} onClick={onClickPage}>
            {index + 1}
          </span>
        ))}
    </>
  );
}
