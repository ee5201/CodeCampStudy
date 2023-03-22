import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";
import styled from "@emotion/styled";
const Div = styled.div`
  width: 1000px;
  height: 200px;
  display: flex;
`;
const Img = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 10em;
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const UPLOADFILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
export default function ImageUploadPage() {
  // const [image, setimage] = useState("");
  // const [file, setFile] = useState<File>();
  const [images, setimages] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([, ,]);

  const [UploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOADFILE);

  const [Myfunction] = useMutation(CREATE_BOARD);

  const onCLickSubmit = async () => {
    // 1. Promise All 사용하지 않을 때
    // for(let i=0; i<=2; i++){
    //   await UploadFile({variables:{file:files[i]}})
    // } // 좋은 방법 아님
    // const UploadImage0 = await UploadFile({ variables: { file: files[0] } });
    // const UploadImage1 = await UploadFile({ variables: { file: files[1] } });
    // const UploadImage2 = await UploadFile({ variables: { file: files[2] } });

    // const url0 = UploadImage0.data?.uploadFile.url;
    // const url1 = UploadImage1.data?.uploadFile.url;
    // const url2 = UploadImage2.data?.uploadFile.url;

    // const resultUrls = [url0, url1, url2]; // [dog1.jp,dog2.jp,dog3.jpg]

    // 2. Promise All 사용 할 때
    // const results = await Promise.all([
    //   UploadFile({ variables: { file: files[0] } }),
    //   UploadFile({ variables: { file: files[0] } }),
    //   UploadFile({ variables: { file: files[0] } }),
    // ]);
    // const resultUrls = results.map((el) => (el ? el.data?.uploadFile.url : "")); // [dog1.jp,dog2.jp,dog3.jpg]

    // 3. promise.all 썻을 때(리펙토링))
    // files - [files[0],files[1],files[2]]
    //  files.map((el) => UploadFile({ variables: { file: el } }),) // [uploadFile({...:file0})],[uploadFile({...:file1})],[uploadFile({...:file2})]

    const results = await Promise.all(
      files.map((el) =>
        el
          ? UploadFile({
              variables: {
                file: el,
              },
            })
          : ""
      )
    );
    const resultURLS = results.map((el) => (el ? el.data?.uploadFile.url : ""));

    const result = await Myfunction({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "하앟",
          contents: "안녕하세요",
          images: resultURLS, // [url0,url1,url2]
        },
      },
    });
    console.log(result);
  };

  const OnChangeFile =
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
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
          // setimages(event.target?.result);
          // setFiles(file);

          const tempUrls = [...images];
          tempUrls[index] = event.target?.result;
          setimages(tempUrls);
          files[index] = file;
          setFiles(files);
        }
      };
    };

  return (
    <>
      <input type="file" onChange={OnChangeFile(1)} />
      <input type="file" onChange={OnChangeFile(2)} />
      <input type="file" onChange={OnChangeFile(3)} />

      <Div>
        <Img src={images[0]} />
        <Img src={images[1]} />
        <Img src={images[2]} />
      </Div>

      <button onClick={onCLickSubmit}>게시글 등록하기</button>
    </>
  );
}
