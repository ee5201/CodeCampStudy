import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import Layoutheaderpresenter from "./Layoutheaderpresenter";

export default function LayoutheaderContainer() {
  const router = useRouter();
  const OnclickTitle = (event: ChangeEvent<HTMLButtonElement>) => {
    void router.push("/board");
  };
  const OnclickLogin = (event: ChangeEvent<HTMLButtonElement>) => {
    void router.push("/login");
  };
  const OnclicksignUP = (event: ChangeEvent<HTMLButtonElement>) => {
    void router.push("/signUP");
  };
  return (
    <Layoutheaderpresenter
      OnclickTitle={OnclickTitle}
      OnclickLogin={OnclickLogin}
      OnclicksignUP={OnclicksignUP}
    />
  );
}
