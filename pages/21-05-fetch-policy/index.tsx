import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import FetchPolicyExample from "../../src/components/units/board/21-fetch-policy";

const FETCH_BOARD = gql`
  query fecthBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function FetchPolicy() {
  const { data } = useQuery(FETCH_BOARD);
  const [isOpen, setisOpen] = useState(false);

  const OnClickState = () => {
    setisOpen(true);
  };

  return (
    <>
      <button onClick={OnClickState}>
        버튼을 클릭하면 새로운 컴포넌트가 나타난다.
      </button>
      {isOpen && <FetchPolicyExample />}
    </>
  );
}
