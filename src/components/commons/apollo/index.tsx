import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  fromPromise,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { gql, GraphQLClient } from "graphql-request";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { accessTokenState } from "../../../commons/store";

const GlobalState = new InMemoryCache();

interface IApolloSettingPage {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingPage) {
  const [accessToken, setaccessToken] = useRecoilState(accessTokenState);

  // //1. 프린렌더링 예제 - process.browser 방법
  // if (process.brower){
  //   console.log("지금은 브라우저다")
  //   const result = localStorage.get("accessToken")
  //   console.log(result)
  //   if(result) setaccessToken(reuslt)
  // }else{
  //   window.alert("안녕하세요")
  //   console.log("지금은 프론트 엔드 서버다(즉 yarn dev로 실행시킨 프로그램 내부다")
  //   const result = localStorage.getItem("accessToken")
  //   console.log(result)
  //   if(result ) setaccessToken(result)
  // }

  //  //2. 프리렌더링 예제 - typeof window 방법
  // if (type of window !="undefined"){
  //   console.log("지금은 브라우저다")
  //   const result = localStorage.get("accessToken")
  //   console.log(result)
  //   if(result) setaccessToken(reuslt)
  // }else{
  //   window.alert("안녕하세요")
  //   console.log("지금은 프론트 엔드 서버다(즉 yarn dev로 실행시킨 프로그램 내부다")
  //   const result = localStorage.getItem("accessToken")
  //   console.log(result)
  //   if(result ) setaccessToken(result)
  // }

  // // 3. useEffect( ) 방법
  useEffect(() => {
    // 1. 기존방식(refreshToken 이전)
    //   console.log("지금은 브라우저");
    //   const result = localStorage.getItem("accessToken");
    //   if (result) setaccessToken(result);
    // }, []);
    // 2. 새로운 방식(refreshToken 이후)
    void getAccessToken().then((newAccessToken) => {
      setaccessToken(newAccessToken);
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료 에러인지 체크 (unAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // 2-1.  refreshToken으로 accessToken을 재발급 받기
            getAccessToken().then((newAccessToken) => {
              // 2-2.   재발급 받은 accessToken 저장하기
              setaccessToken(newAccessToken);
              // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기(토큰 바꿔치기)
              // operation.getContext().headers // 실패한 정보들을 가져오려면 getcontext
              if (typeof newAccessToken !== "string") return;
              operation.setContext({
                headers: {
                  ...operation.getContext().headers, // 만료된 토큰이 추가되어 있는 상태
                  Authorization: `Bearer ${newAccessToken}`, // 토큰만 새걸로 바꿔치기
                },
              }); // 3-2 재발급 받은 accessToken으로 방금 수정한 쿼리 재요청하기
              forward(operation);
            })
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    // cache: new InMemoryCache(), //나중에 하기
    cache: GlobalState, // 페이지 전환 되어도 캐시 유지
    connectToDevTools: true,
  });

  // prettier-ignore
  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}
