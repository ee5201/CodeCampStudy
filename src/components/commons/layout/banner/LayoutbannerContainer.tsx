import LayoutBannerPresenter from "./Layoutbannerpresenter";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function LayoutBannerContainer() {
  return <LayoutBannerPresenter settings={settings} />;
}
