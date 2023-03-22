import axios from "axios";
import { useState } from "react";

export default function IsSubmittingPage() {
  const [issubmitting, setissubmitting] = useState(false);
  const [data, setdata] = useState<any>();
  const onClickSubmit = async () => {
    setissubmitting(true);
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result);
    setdata(result);
    setissubmitting(false);
  };
  return (
    <>
      <button onClick={onClickSubmit} disabled={issubmitting}>
        등록가기 등의 Api 요청버튼
      </button>
    </>
  );
}
