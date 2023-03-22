import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

export default function StaticeRoutedPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  console.log(data);
  // const OnclickMovetoEdit = () => {
  //   router.push(`/09-01-boards/${router.query.number}/edit`);
  // };
  return (
    <>
      {/* <div>{router.query.number}번게시글페이지 이동이 완료 되었습니다.</div> */}
      <div>작성자:{data?.fetchBoard.writer}</div>
      <div>제목:{data?.fetchBoard.title}</div>
      <div>내용:{data?.fetchBoard.contents}</div>
      {/* <button onClick={OnclickMovetoEdit}>수정하기</button> */}

      {/* 옵셔널체이닝ㅈ */}
    </>
  );
}
