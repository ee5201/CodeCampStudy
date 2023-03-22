import { gql, useQuery } from "@apollo/client";

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

export default function FetchPolicyExample() {
  const { data } = useQuery(FETCH_BOARD);

  return (
    <>
      <button></button>
    </>
  );
}
