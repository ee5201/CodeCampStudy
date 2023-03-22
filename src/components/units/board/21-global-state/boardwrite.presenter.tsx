import { useRecoilState } from "recoil";

export default function BoardWriteUI() {
  const [isEdit, setisEdit] = useRecoilState(isEditState);
  return <div>{isEdit ? "수정하기" : " 등록하기"}</div>;
}
