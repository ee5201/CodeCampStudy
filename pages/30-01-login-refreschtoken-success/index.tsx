import { gql, useApolloClient, useLazyQuery, useQuery } from "@apollo/client";
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
  // 1. 페이지 접속하면 자동으로 data에 받아짐  리렌더링 됨
  // const { data } =
  //   useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN); //
  // 2. 버튼 클릭시 직접 실행하면 data에 받아지고 , 리렌더링 됨
  //   const [myQuery,{data}] = useLazyQuery(FETCH_USER_LOGGED_IN)  //

  // 3. axios와 동일
  //   const client = useApolloClient() // axios와 동일 하다.

  const client = useApolloClient();

  const onclickButton = async () => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
    console.log(result);
  };
  return (
    <Fragment>
      <button onClick={onclickButton}>클릭하세요 </button>
    </Fragment>
  );
}
