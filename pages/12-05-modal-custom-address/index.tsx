import { ChangeEvent, useState } from "react";
import { Button, Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import { Address } from "cluster";

export default function App() {
  const [isopen, setIsopen] = useState(false);
  const [address, setaddress] = useState("");

  const showModal = () => {
    setIsopen(true);
  };

  const handleOk = () => {
    setIsopen(false);
  };

  const handleCancel = () => {
    setIsopen(false);
  };

  const handleComplete = (address: Address) => {
    console.log(address.zonecode);
  };
  return (
    <>
      <Button onClick={showModal}>모델창 열기</Button>
      {/* 모달 종료 방식 - 1. 모달 숨기는 방법*/}
      {/* <Modal
        open={isopen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        비밀번호 입력: <DaumPostcodeEmbed onComplete={handleComplete} />;
        주소입력창: {address}
      </Modal> */}

      {/* 모달 종료 방식 - 2. 모달 삭제하는 방법*/}
      {isopen && (
        <Modal open={true} onOk={handleOk} onCancel={handleCancel}>
          비밀번호 입력: <DaumPostcodeEmbed onComplete={handleComplete} />;
          주소입력창: {address}
        </Modal>
      )}
    </>
  );
}
