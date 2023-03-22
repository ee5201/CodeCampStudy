import { gql, useMutation } from "@apollo/client";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";

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
  const [inputs, setInput] = useState({ writer: "", title: "", contents: "" });

  const onCLickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        //variables $역할을 해줌
        ...inputs,
      },
    });
    console.log(result);
    alert(result.data.createBoard.message);
  };

  const onChangeInput = (event) => {
    setInput({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <>
      writer:
      <input id="writer" onChange={onChangeInput} type="text" />
      <br />
      Title
      <input id="Title" onChange={onChangeInput} type="text" />
      <br />
      Contents:
      <input id="Contents" onChange={onChangeInput} type="text" />
      <br />
      <button onClick={onCLickSubmit}>GRAPHQL-API(동기)요청하기</button>
    </>
  );
}
