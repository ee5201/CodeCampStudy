import { CaretRightOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcons = styled(CaretRightOutlined)`
  font-size: 400px;
  color: red;
`;
export default function LibraryIconPage() {
  return (
    <div>
      <MyIcons />
    </div>
  );
}
