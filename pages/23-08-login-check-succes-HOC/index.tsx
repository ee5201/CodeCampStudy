import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";
import { IQuery } from "../../src/commons/types/generated/types";
import { withAUth } from "../../src/components/commons/HOCF/withAuth";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      _id
    }
  }
`;

function LoginSucess() {
  // const router = useRouter();
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     alert("로그인 후 이용가능합니다.");
  //     void router.push("/23.07-login-check-HOC");
  //   }
  // }, []);
  return <Fragment>{data?.fetchUserLoggedIn.name}님 환영합니다.</Fragment>;
}

export default withAUth(LoginSucess);
