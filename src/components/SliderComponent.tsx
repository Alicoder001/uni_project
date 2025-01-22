import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const SliderComponent = ({ settings, children }: any) => {
  return <Slider {...settings}>{children}</Slider>;
};

export default SliderComponent;
