import { useEffect } from "react";
import { useRecoilState } from "recoil";
import BoardWrite from "../../src/components/units/board/10-write/BoardWrite.container";

export default function GlobalStatePage() {
  const [isEdit, setisEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setisEdit(true);
  }, []);
  return <BoardWrite />;
}
