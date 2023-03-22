import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { ChangeEvent } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [writer, setwriter] = useState("");
  const [title, settitle] = useState("");
  const [contents, setcontents] = useState("");

  const [Myfunction] = useMutation(CREATE_BOARD);

  const onCLickSubmit = async () => {
    const result = await Myfunction({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    alert(result.data.createBoard.message);
  };

  const OnChangeInputWriter = (event) => {
    setwriter(event.target.value);
  };

  const OnChangeInputTitle = (event) => {
    settitle(event.target.value);
  };

  const OnChangeInputcontents = (event) => {
    setcontents(event.target.value);
  };
  return (
    <>
      작성자:
      <input type="text" onChange={OnChangeInputWriter} />
      제목:
      <input type="text" onChange={OnChangeInputTitle} />
      내용:
      <input type="text" onChange={OnChangeInputcontents} />
      <button onClick={onCLickSubmit}>등록하기</button>
    </>
  );
}
