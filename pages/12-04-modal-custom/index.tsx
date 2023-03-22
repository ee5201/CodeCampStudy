import { ChangeEvent, useState } from "react";
import { Button, Modal } from "antd";

export default function App() {
  const [isopen, setIsopen] = useState(false);
  const [password, setpassword] = useState("");

  const showModal = () => {
    setIsopen(true);
  };

  const handleOk = () => {
    setIsopen(false);
  };

  const handleCancel = () => {
    setIsopen(false);
  };

  const onchangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setpassword(event.target.value);
  };
  return (
    <>
      <Button onClick={showModal}>모델창 열기</Button>
      <Modal
        title="모델 제목 "
        open={isopen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        비밀번호 입력: <input type="password" onChange={onchangePassword} />
      </Modal>
    </>
  );
}
