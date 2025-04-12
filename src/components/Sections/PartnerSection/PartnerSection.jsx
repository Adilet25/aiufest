// import { Autoplay } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import dodo from "../../../assets/partnerslogo/dodo.svg";
import bakai from "../../../assets/partnerslogo/bakai.svg";
import aki from "../../../assets/partnerslogo/aki.svg";
import kut from "../../../assets/partnerslogo/kut.svg";
import kaktus from "../../../assets/partnerslogo/kaktusw.svg";

import "./PartnerSectionn.css";

const PartnerSection = () => {
  return (
    <div className="partnerBlock">
      <div className="partnerRank_block">
        <div className="partnerRank1">
          <h2 className="partnerBlock_title">Генеральный спонсор</h2>
          <img loading="lazy" src={bakai} alt="" className="partSec bigSpon" />
        </div>{" "}
      </div>
      <h2 className="partnerBlock_title">Партнёры</h2>
      <div className="partnerBlock_img">
        <img loading="lazy" src={dodo} alt="error" className="parnterSwiper" />
        <img loading="lazy" src={bakai} alt="error" className="parnterSwiper" />
      </div>
      <h2 className="partnerBlock_title">Медиа Партнёры</h2>
      <div className="partnerBlock_img2">
        <img loading="lazy" src={aki} alt="error" className="parnterSwiper" />
        <img
          loading="lazy"
          src={kaktus}
          alt="error"
          className="parnterSwiper"
        />
        <img
          loading="lazy"
          src={kut}
          alt="error"
          className="parnterSwiper"
          id="kaktus"
        />
      </div>
    </div>
  );
};

export default PartnerSection;
