import "./SecondSection.css";
import ReactPlayer from "react-player/lazy";
import el4 from "../../../assets/elements/el4.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SecondSection = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".secondBlock_title",
      {
        y: 20,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
      }
    );
    gsap.fromTo(
      ".secondViedo",
      {
        y: 20,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
      }
    );
    gsap.fromTo(
      ".secondVideo_text",
      {
        y: 20,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
      }
    );
  }, []);
  return (
    <div className="container">
      <p className="secondBlock_title">О мероприятии</p>
      <div className="secondBlock_video">
        <ReactPlayer
          url="https://youtu.be/E4yRYtKRUls?si=oSQ1sKx05RtNyIOE"
          className="secondViedo"
        />
        <div className="secondVideo_text">
          <p>
            Масштабное событие для абитуриентов, студентов и работодателей. В
            программе: презентации факультетов, ярмарка вакансий,
            благотворительная ярмарка еды и концерт{" "}
          </p>
          <p>
            Таймлайн: - 10:00–12:00 — Встреча с факультетами. - 12:00–14:00 —
            Ярмарка вакансий. - 14:00–18:00 — Фестиваль культур и концерт.
          </p>
        </div>
        <img loading="lazy" src={el4} alt="" className="secondBlock_el" />
      </div>
      <div className="secondInfo">
        <div>
          <p className="fs2"> 1</p>
          <p>день</p>
        </div>
        <div>
          <p className="fs2"> 3000</p>
          <p>посетителей</p>
        </div>
        <div>
          <p className="fs2"> 19</p>
          <p>отделов</p>
        </div>
        <div>
          <p className="fs2"> 1000</p>
          <p>участников</p>
        </div>
        <div>
          <p className="fs2"> 10</p>
          <p>тематических зон</p>
        </div>
        <div>
          <p className="fs2"> 30+</p>
          <p>компаний</p>
        </div>
        <div className="numend">
          <p className="fs2 "> 2 000 000</p>
          <p>медиа охватов</p>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
