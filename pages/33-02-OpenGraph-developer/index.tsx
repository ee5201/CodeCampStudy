/// 디스코드 개발자
// 개발자 일때 => 디스코드(개발자)

import axios from "axios";

export default function OpenGraphDeveloperPage() {
  const onclickEnter = async () => {
    // 채팅데이터에 주소가 있는지 찾기(ex, https:// ~~ 로 시작하는 것 )

    // 2. 해당 주소로 스크래핑 하기
    const result = await axios.get("https://www.gmarket.co.kr"); // CORS
    console.log(result.data);

    // 3. 메타태그에서 오픈그래프(og:) 찾기
    console.log(
      result.data.split("<meta").filter((el: string) => el.includes("og:"))
    );
  };
  return (
    <>
      <button onClick={onclickEnter}>채팅 입력 후 엔터치기 </button>
    </>
  );
}
