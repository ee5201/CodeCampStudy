import styled from "@emotion/styled";
import { Rate } from "antd";
import { useState } from "react";

const MyStars = styled(Rate)`
  font-size: 50px;
  color: red;
`;

export default function LibraryIconPage() {
  const [value, setValue] = useState(0);

  const qqq = (value: number) => {
    setValue(value);
    alert(`${value}개입니다.`);
    window.location.reload();
  };

  return (
    <div>
      <MyStars onChange={qqq} value={value} />
    </div>
  );
}
