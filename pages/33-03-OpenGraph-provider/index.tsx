// 제공자 => 네이버(제공자)
import Head from "next/head";
export default function OpenGraphProviderPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="중고마켓" />
        <meta
          property="og:description"
          content="나의 중고마켓에 오신 것을 환영 합니다."
        />
        <meta property="og:image" content="" />
      </Head>
      <div>
        중고마켓에 오신 것을 환영합니다.(여기는 body이므로 미리보기 상관 없음!!)
      </div>
    </>
  );
}
