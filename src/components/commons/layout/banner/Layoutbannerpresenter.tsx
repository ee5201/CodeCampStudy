import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./Layoutbannerstyle";
import { ILayoutBannerPresenter } from "./Layoutbannertypes";

export default function LayoutBannerPresenter(props: ILayoutBannerPresenter) {
  return (
    <S.Wrapper>
      <Slider
        onClick={props.settings}
        dots={props.settings.dots}
        infinit={props.settings.infinite}
        speed={props.settings.speed}
        slidesToshow={props.settings.slidesToShow}
        slidesToScroll={props.settings.slidesToScroll}
      >
        <div>
          <S.SliderItem>11111111111</S.SliderItem>
        </div>
        <div>
          <S.SliderItem>사진</S.SliderItem>
        </div>
        <div>
          <S.SliderItem>3</S.SliderItem>
        </div>
        <div>
          <S.SliderItem>4</S.SliderItem>
        </div>
        <div>
          <S.SliderItem>5</S.SliderItem>
        </div>
        <div>
          <S.SliderItem>6</S.SliderItem>
        </div>
      </Slider>
    </S.Wrapper>
  );
}
