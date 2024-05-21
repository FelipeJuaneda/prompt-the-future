import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import "./Carrousele.css";
const Carrousele = ({ children }) => {
  return (
    <Swiper
      style={{ padding: "50px 0" }}
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      grabCursor={true}
      breakpoints={{
        0: {
          slidesPerView: 1.1,
          spaceBetween: 20,
        },
        430: {
          slidesPerView: 1.3,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1.9,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
    >
      {children}
    </Swiper>
  );
};

export default Carrousele;
