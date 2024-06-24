import { Swiper } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CarrouselPlatform.css";

const CarrouselePlatform = ({ children }) => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Navigation, Pagination, A11y]}
      navigation
      pagination={{ clickable: true }}
      style={{ paddingBottom: 40 }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        540: {
          slidesPerView: 1.5,
        },
        1000: {
          slidesPerView: 3,
        },
      }}
      className="custom-carrousele-platform"
    >
      {children}
    </Swiper>
  );
};

export default CarrouselePlatform;
