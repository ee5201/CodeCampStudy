import { useMoveTOpage } from "../../src/components/commons/hooks/useMoveTopage";
export default function CustomHooksUseMoveToPage() {
  const { onClickMoveTopage } = useMoveTOpage();
  return (
    <>
      <button onClick={onClickMoveTopage("/boards")}>게시판으로 이동</button>
      <button onClick={onClickMoveTopage("/market")}>마켓으로 이동</button>
      <button onClick={onClickMoveTopage("/mypage")}>마이페이지로 이동</button>
    </>
  );
}
