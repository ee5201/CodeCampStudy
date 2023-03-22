// 제공자 => 네이버(제공자)
import { useQuery } from "@apollo/client";
import { gql, GraphQLClient } from "graphql-request";
import Head from "next/head";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      images
    }
  }
`;
export default function OpenGraphProviderPage(props: any) {
  // const { data } = useQuery(FETCH_USEDITEM, {
  //   variables: { useditemdId: "63f354e01182750028ee6e9a" },
  // });
  return (
    <>
      <Head>
        <meta property="og:title" content={props?.qqq.name} />
        <meta property="og:description" content={props?.qqq.remarks} />
        <meta property="og:image" content={props?.qqq.images?.[0]} />
      </Head>
      <div>
        중고마켓에 오신 것을 환영합니다.(여기는 body이므로 미리보기 상관 없음!!)
      </div>
    </>
  );
}

const getServaerSideProps = async () => {
  console.log("여기는 서버 입니다. ");
  // 1. 여기서 api요청
  const graphQlClient = new GraphQLClient(
    "https://backendonline.codebootcamp.co.kr/graphql"
  );
  const result = await graphQlClient.request(FETCH_USEDITEM, {
    useditemId: "63f354e01182750028ee6e9a",
    w,
  });
  // 2. 받은 결과를 return

  return {
    props: {
      qqq: {
        name: result.fetchUseditem.name,
        remarks: result.fetchUseditem.remarks,
        images: result.fetchUseditem.images,
      },
    },
  };
};
