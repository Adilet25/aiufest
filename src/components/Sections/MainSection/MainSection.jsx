import el3 from "../../../assets/elements/el3.svg";
import logo from "../../../assets/logo.svg";
import dodo from "../../../assets/partnerslogo/dodo.png";
import cola from "../../../assets/partnerslogo/cola.png";
import demir from "../../../assets/partnerslogo/demir.png"
import obank from "../../../assets/partnerslogo/obank.png"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./MainSection.css";

const MainSection = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#planet1",
      {
        y: -10,
      },
      {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 2,
      }
    );
    gsap.fromTo(
      ".firstBlock_main",
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
      ".secondBlock_org",
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
    <>
      <div className="bg1">
        <div className="container">
          <div className="firstBlock_main ">
            <div className="firstMain_text">
              <p className="text_uppercase">День открытых дверей</p>
              <h2>AIU FEST 2025</h2>
              <p>В Международном Университете Ала-Тоо.</p>
              <p id="firstDate">26 - апреля</p>
            </div>
            <img
              loading="lazy"
              src={el3}
              alt=""
              id="el3"
              className="mainBgColor"
            />
          </div>
          <div className="logobigm">
            <p className="secondBlock_text">
              Мероприятие проводится при поддержке
            </p>
            <div className="logobigb">
            <img
                loading="lazy"
                src={obank}
                alt=""
                className="logobigbb obank"
              />
              <img
              loading="lazy"
              src={demir}
              alt=""
              className="logobigbb demir "
            />
              <img
                loading="lazy"
                src={cola}
                alt=""
                className="logobigbb"
              />
              <img
                loading="lazy"
                src={dodo}
                alt=""
                className="logobigbb dodImgMain"
                id="dodo"
              />
            </div>
          </div>
          <div className="secondBlock_org">
            <p className="secondBlock_text">Организаторы</p>
            <div className="secondBlock_sponsors">
              <img
                loading="lazy"
                src={logo}
                alt="error"
                className="logobigbb2"
              />
              <div className="secondBlock_sponsors_text">
                <p>Отдел по внеучебной деятельности</p>
                <p>Отдел Приемной Комиссии</p>
                <p>Центр Карьеры</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
