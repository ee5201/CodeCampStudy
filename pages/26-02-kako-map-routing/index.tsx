import { useRouter } from "next/router";
import Link from "next/link";

export default function KaKaoPage() {
  const router = useRouter();

  const onClickMoveToMap = () => {
    void router.push("26-kako-map-routed");
  };

  return (
    <>
      {/* <a></a> */}
      {/* <button onClick={onClickMoveToMap}>맵으로 이동하기!!!</button> */}
      <Link href={"/26-03-kako-map-routed"}>맵으로 이동</Link>
    </>
  );
}
