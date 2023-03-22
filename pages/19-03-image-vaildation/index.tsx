import { ChangeEvent, useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";
import { checkValidationFile } from "../../src/commons/libraries/vaildationFile";

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

  const [image, setimage] = useState("");

  const OnChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    console.log(file);
    checkValidationFile(file);
    const isValid = checkValidationFile(file);
    if (!isValid) return;

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
        // accept="image/jpeg"
      />
      <img src={`https://storage.googleapis.com/${image}`} />
    </>
  );
}
