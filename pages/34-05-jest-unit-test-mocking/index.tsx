import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { ChangeEvent } from "react";

// prettier-ignore
export const CREATE_BOARD = gql`
  mutation createBoard($creatBoardInput:CreateBoardInput!) {
    createBoard(createBoardInput:$createBoardInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();
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
    // alert(result.data.createBoard._id);
    router.push(`/boards/${result.data?.createBoard._id}`);
  };

  const OnChangeInputWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setwriter(event.target.value);
  };

  const OnChangeInputTitle = (event: ChangeEvent<HTMLInputElement>) => {
    settitle(event.target.value);
  };

  const OnChangeInputcontents = (event: ChangeEvent<HTMLInputElement>) => {
    setcontents(event.target.value);
  };
  return (
    <>
      작성자:
      <input role="input-writer" type="text" onChange={OnChangeInputWriter} />
      제목:
      <input role="input-title" type="text" onChange={OnChangeInputTitle} />
      내용:
      <input
        role="input-contents"
        type="text"
        onChange={OnChangeInputcontents}
      />
      <button role="submit-button" onClick={onCLickSubmit}>
        등록하기
      </button>
    </>
  );
}
