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
  IMutationLoginUserExampleArgs,
} from "../../src/commons/types/generated/types";

const CREATE_USER_EXAMPLE = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
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
    Pick<IMutation, "loginUserExample">,
    IMutationLoginUserExampleArgs
  >(CREATE_USER_EXAMPLE);

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
      const accessToken = result.data?.loginUserExample.accessToken;
      console.log(accessToken);
      // //2. accessToken을 globalState에 저장하기
      if (!accessToken) {
        Modal.error({ content: "로그인에 실패했습니다. 다시 시도해 주세요" });
      }
      setaccessToken(accessToken);

      // //3. 로그인 성공 페이지로 이동하기
      router.push("/30-01-login-refreschtoken-success");
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
