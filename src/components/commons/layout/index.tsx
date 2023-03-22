import { useRouter } from "next/router";
import LayoutBannerContainer from "./banner/LayoutbannerContainer";
import LayoutFooter from "./footer";
import LayoutheaderContainer from "./header/LayoutheaderContatiner";
import Layoutnavigationcontainer from "./navigation/Layoutnavigationcontainer";

interface ILaoutTT {
  children: JSX.Element;
}

const HIDDEN_HEADERS = [
  "/12-04-modal-custom",
  // ...
  // ...
];
// 모든 페이지에 적용되는 페이지 중 원치 않은 페이지 제외 할 떄 여기에다가 작성한다.

export default function Layoutt(props: ILaoutTT) {
  const router = useRouter();
  console.log("=====");
  console.log(router.asPath);
  console.log("=====");

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <div>
      {!isHiddenHeader && <LayoutheaderContainer />}
      <LayoutBannerContainer />
      <Layoutnavigationcontainer />
      <div>{props.children}</div>
      <LayoutFooter />
    </div>
  );
}
