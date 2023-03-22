import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";
import styled from "@emotion/styled";
const Div = styled.div`
  width: 80px;
  height: 80px;
  background-color: gray;
`;
const Img = styled.img`
  width: 80px;
  height: 80px;
`;
export default function ImageUploadPage() {
  // const [Image] = useMutation<
  //   Pick<IMutation, "uploadFile">,
  //   IMutationUploadFileArgs
  // >(UPLOADFILE);
  const [image, setimage] = useState("");

  const OnChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0]; // <input type="file" multiple/> 에서 multiple 속성으로 여러개 드래그 기능
    if (!file) return;
    console.log(file);

    // 1. 임시 url 생성 (가짜 url) 시간이 짧다

    // const result = URL.createObjectURL(file); // 내 브라우저에서만 접근 가능한 가짜 url
    // console.log(result);
    // setimage(result);

    // 2. 임시 url 생성 (진짜 url) - 다른 브라우저에서도 접근 가능 하다 . 시간이 약간 걸림
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        console.log(event.target?.result); //  게시판에서 event.target.id 대신 event.currentTarget.id를 썻던 이유: event.target은 태그만을 가르키지 않음
        setimage(event.target?.result);
      }
    };
  };

  // const OnCLickButton = async () => {
  //   try {
  //     const result = await Image({ variables: { file } });
  //     console.log(result.data?.uploadFile.url);
  //     setimage(result.data?.uploadFile.url ?? "");
  //   } catch (error) {
  //     if (error instanceof Error) Modal.error({ content: error.message });
  //   }
  // };

  return (
    <>
      <input type="file" onChange={OnChangeFile} />
      {/* <img src={`https://storage.googleapis.com/${image}`} /> */}
      <Div>
        <img src={image} />
      </Div>
    </>
  );
}
