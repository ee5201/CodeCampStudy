import { gql, useQuery } from "@apollo/client";
import { Fragment } from "react";
import { IQuery } from "../../src/commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      _id
    }
  }
`;

export default function LoginSucess() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  return <Fragment>{data?.fetchUserLoggedIn.name}님 환영합니다.</Fragment>;
}
