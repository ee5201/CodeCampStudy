import { Fragment } from "react";
import * as S from "./Layoutnavigationstyles";

const NAVIGATION_MENU = [
  { name: "라이브게시판", page: "/boards" },
  { name: "라이브상품", page: "/markets" },
  { name: "마이페이지", page: "/mypage" },
];

export default function Layoutnavigationpresenter(props: any) {
  return (
    <S.Wrapper>
      {NAVIGATION_MENU.map((el) => (
        <Fragment key={el.page}>
          <S.NavItems id={el.page} onClick={props.onClickItems}>
            {el.name}
          </S.NavItems>
        </Fragment>
      ))}
    </S.Wrapper>
  );
}
