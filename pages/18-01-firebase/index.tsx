import { async } from "@firebase/util";
import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite";
import { firebaseApp } from "../_app";

export default function FirebaseFunction() {
  const OnclickSubmit = () => {
    const board = collection(getFirestore(firebaseApp), "board");
    void addDoc(board, {
      writer: "철수",
      title: "제목",
      contents: "내용입니다.",
    });
  };

  const OnclickFetch = async () => {
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const datas = result.docs.map((el) => el.data());
    console.log(datas);
  };

  return (
    <>
      <button onClick={OnclickSubmit}>등록하기</button>
      <button onClick={OnclickFetch}>조회하기</button>
    </>
  );
}
