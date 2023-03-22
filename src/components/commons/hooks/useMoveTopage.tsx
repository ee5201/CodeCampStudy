import { useRouter } from "next/router";
import { RecoilState, useRecoilState } from "recoil";
import { vistedPageState } from "../../../commons/store";

export function useMoveTOpage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(vistedPageState);

  const onClickMoveTopage = (path: string) => () => {
    setVisitedPage(path);
    void router.push(path);
  };
  return {
    onClickMoveTopage,
  };
}
