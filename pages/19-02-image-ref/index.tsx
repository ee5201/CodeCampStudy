import { ChangeEvent, useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOADFILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const fileRef = useRef<HTMLInputElement>(null);

  const [Image] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOADFILE);
  const [file, setFiles] = useState("");
  const [image, setimage] = useState("");

  const OnChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const File = event.currentTarget.files?.[0];
    console.log(File);
    setFiles(File);
  };

  const OnCLickButton = async () => {
    try {
      const result = await Image({ variables: { file } });
      console.log(result.data?.uploadFile.url);
      setimage(result.data?.uploadFile.url ?? "");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const OnClickImage = () => {
    fileRef.current?.click();
  };
  return (
    <>
      <div
        onClick={OnClickImage}
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
      >
        이미지 선택
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={OnChangeFile}
        ref={fileRef}
      />
      <button onClick={OnCLickButton}>올리기</button>
      <img src={`https://storage.googleapis.com/${image}`} />
    </>
  );
}
