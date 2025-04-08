import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "./AlbumSection.css";
import slide_image_1 from "../../.../../../assets/albumcompress/img1-min.jpg";
import slide_image_2 from "../../../assets/albumcompress/img2-min.jpg";
import slide_image_3 from "../../../assets/albumcompress/img3-min.jpg";
import slide_image_4 from "../../../assets/albumcompress/img4-min.jpg";
import slide_image_6 from "../../../assets/albumcompress/img6-min.jpg";
import slide_image_7 from "../../../assets/albumcompress/img7-min.jpg";
import slide_image_8 from "../../../assets/albumcompress/img8-min.jpg";
import slide_image_9 from "../../../assets/albumcompress/img9-min.jpg";
import slide_image_10 from "../../../assets/albumcompress/img10-min.jpeg";
import slide_image_11 from "../../../assets/albumcompress/img11-min.jpg";
import slide_image_12 from "../../../assets/albumcompress/img12-min.jpg";
import slide_image_13 from "../../../assets/albumcompress/img13-min.jpg";
import slide_image_14 from "../../../assets/albumcompress/img14-min.jpg";
import slide_image_15 from "../../../assets/albumcompress/img15-min.jpg";
import slide_image_16 from "../../../assets/albumcompress/img16-min.jpg";
import slide_image_17 from "../../../assets/albumcompress/img17-min.jpg";
import slide_image_18 from "../../../assets/albumcompress/img18-min.jpg";
import slide_image_19 from "../../../assets/albumcompress/img19-min.jpg";
import slide_image_20 from "../../../assets/albumcompress/img20-min.jpg";
import slide_image_21 from "../../../assets/albumcompress/img21-min.jpg";
const slide_images = [
  slide_image_1,
  slide_image_2,
  slide_image_3,
  slide_image_4,
  slide_image_6,
  slide_image_7,
  slide_image_8,
  slide_image_9,
  slide_image_10,
  slide_image_11,
  slide_image_12,
  slide_image_13,
  slide_image_14,
  slide_image_15,
  slide_image_16,
  slide_image_17,
  slide_image_18,
  slide_image_19,
  slide_image_20,
  slide_image_21

];

function AlbumSection() {
  return (
    <div className="container">
      <h1 className="heading">Фото альбом прошлого года</h1>
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
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {slide_images.map((image, index) => (
          <SwiperSlide key={index} className={`swiper-slide-${index + 1}`}>
            <img src={image} alt={`slide_image_${index + 1}`} />
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
  );
}

export default AlbumSection;
