import { gql, useQuery } from "@apollo/client";

import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import CommentEdit from "../../src/components/units/board/15-board-comment-item-2";

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

export default function StaticeRoutedPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <CommentEdit key={el._id} el={el} />
      ))}
    </>
  );
}
