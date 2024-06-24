import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Pagination, FreeMode } from "swiper/modules";
import { Swiper } from "swiper/react";
import "./Carrousele.css";

const Carrousele = ({ children }) => {
  return (
    <Swiper
      style={{ padding: "50px 0" }}
      modules={[Pagination, FreeMode]}
      spaceBetween={30}
      slidesPerView={1}
      freeMode={true}
      pagination={{ clickable: true }}
      grabCursor={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        430: {
          slidesPerView: 1.3,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      className="custom-carrousele"
    >
      {children}
    </Swiper>
  );
};

export default Carrousele;
