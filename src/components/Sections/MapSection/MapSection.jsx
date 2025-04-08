import rusi from "../../../assets/guest/Rusi.png";
import rusi2 from "../../../assets/guest/Rusi2.png";
import bravo from "../../../assets/guest/Bravo.png";
import shuhrat from "../../../assets/guest/Shu.png";
import map from "../../../assets/map.png";

import "./MapSection.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
const slide_images = [
  { image: rusi, text: "Руслан Асанкан",id:1 },
  { image: shuhrat, text: "Шухрат Якубов",id:2 },
  { image: rusi2, text: "Руслан Айдар",id:3 },
  { image: bravo, text: "'Браво' Шоу балет",id:4 }
];

const MapSection = () => {
  return (
    <div className="bg5">
      <div className="container">
        <div className="tourBlock_main">
          <p className="tourText_block">Список приглашенных гостей</p>
          <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
       
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation,Autoplay]}
        className="swiper_container"
      >
        {slide_images.map((item) => (
          <SwiperSlide key={item.id} className={`swiper-slide-${item.id + 1}`}>
            <img src={item.image} alt={`slide_image_${item.id + 1}`} />
            <p className="slider-text">{item.text}</p>
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
        </div>

        <div className="tourFork_blockParent">
          <p className="tourText_small">Карта локаций</p>
          <img src={map} alt="error" className="mapImg" />
        </div>
      </div>
    </div>
  );
};

export default MapSection;
