import Head from "next/head";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage() {
  const onCLickPayment = () => {
    const IMP = window.IMP;
    IMP.init("imp18823724");

    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "결제 번호",
        name: "아이리버 무선 마우스 외 1개",
        amount: 100,
        buyer_email: "이메일@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/20-01-payment", // 모바일에서는 결제시, 결제페잊로 사이트가 이동됨
      },
      function (rsp: any) {
        // callback
        if (rsp.success) {
          alert("결제가 성공했습니다.");
          console.log(rsp);
          // 결제 성공 로직

          // 백엔드에 결제 관련 데이터 넘겨주기 => 즉 뮤테이션 실행하기
          // createPointTransactionOfLoading
        } else {
          alert("결제에 실패했습니다.");
          // 결제 실패 로직
        }
      }
    );
  };

  return (
    <>
      <Head>
        <script
          // JQEURY
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <button onClick={onCLickPayment}>결제하기 </button>
    </>
  );
}
