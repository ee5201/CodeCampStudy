import * as S from "./Layoutheaderstyles";

export default function Layoutheaderpresenter(props: ILayoutheaderContainer) {
  return (
    <S.Wrapper>
      <S.BoxWrapper>
        <S.Title onClick={props.OnclickTitle}>🇰🇷Live</S.Title>
        <S.ButtonBox>
          <S.ButtonItem onClick={props.OnclickLogin}>로그인</S.ButtonItem>
          <S.ButtonItem onClick={props.OnclicksignUP}>회원가입</S.ButtonItem>
        </S.ButtonBox>
      </S.BoxWrapper>
    </S.Wrapper>
  );
}
