import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

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
  const [keyword, setkeyword] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({ search: search, page: Number(event.currentTarget.id) });
  };

  // const onClickSearch = () => {
  //   void refetch({ search: search, page: 1 });
  // };
  const getDebounce = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
    setkeyword(value);
  }, 500);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    // setSearch(event.currentTarget.value);
    getDebounce(event.currentTarget.value);
  };

  return (
    <>
      검색어 입력
      <input type="text" onChange={onChangeInput} />
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>
            {el.title
              .replaceAll(keyword, `#$%${keyword}#$%`)
              .split("#$%")
              .map((el) => (
                <span
                  key={uuidv4()}
                  style={{ color: el === keyword ? "red" : "black" }}
                >
                  {el}
                </span>
              ))}
          </Column>
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
