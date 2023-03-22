import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

//prettier-ignore
const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    #변수의 타입 적는곳
    createBoard( writer: $writer title: $title contents: $contents #실제 우리가 전달할 변수 적는 곳
    ) {
      message
      _id
      number
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(CREATE_BOARD);

  const [writers, setWriters] = useState("");
  const [titles, setTitle] = useState("");
  const [Content, setContent] = useState("");

  const onCLickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        //variables $역할을 해줌
        writer: writers,
        title: titles,
        contents: Content,
      },
    });
    console.log(result);
    alert(result.data.createBoard.message);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriters(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  return (
    <>
      writer:
      <input onChange={onChangeWriter} type="text" />
      <br />
      Title
      <input onChange={onChangeTitle} type="text" />
      <br />
      Contents:
      <input onChange={onChangeContents} type="text" />
      <br />
      <button onClick={onCLickSubmit}>GRAPHQL-API(동기)요청하기</button>
    </>
  );
}
