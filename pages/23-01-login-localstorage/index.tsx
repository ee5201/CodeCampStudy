import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";
import {
  IMutation,
  IMutationCreateUserArgs,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";

const CREATE_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginUI() {
  const router = useRouter();
  const [accessToken, setaccessToken] = useRecoilState(accessTokenState);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [LoginFunction] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(CREATE_USER);

  const onchangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setemail(event.currentTarget.value);
  };

  const onchangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setpassword(event.currentTarget.value);
  };

  const OnclickLogin = async () => {
    try {
      // //1. 로그인 해서 accessToken 받아오기
      const result = await LoginFunction({
        variables: {
          email: email,
          password: password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);
      // //2. accessToken을 globalState에 저장하기
      if (!accessToken) {
        Modal.error({ content: "로그인에 실패했습니다. 다시 시도해 주세요" });
      }
      setaccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken); //(임시 사용 나중에 지울 예정 )

      // //3. 로그인 성공 페이지로 이동하기
      router.push("/22-02-login-sucess");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      이메일: <input type="text" onChange={onchangeEmail} />
      비밀번호 :<input type="password" onChange={onchangePassword} />
      <button onClick={OnclickLogin}>로그인 하기 </button>
    </>
  );
}
