import "./AboutSection.css";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg7">
      <div className="expoAbout">
        <div className="expoAbout_div exp1">
          <h2>ДЛЯ ГОСТЕЙ</h2>
          <p>
            Что получат абитуриенты: <br /> 1) Возможность задать вопросы
            преподавателям. <br />
            2) Подарки за регистрацию (чек-лист для поступления).{" "}
          </p>
          <button className="expoBtn" onClick={() => navigate("/choice")}>
            Участвовать бесплатно
          </button>
        </div>{" "}
        <div className="expoAbout_div exp2">
          <h2>ДЛЯ ПАРТНЕРОВ</h2>
          <p>
            Преимущества спонсорства: <br /> 1) Логотип на сайте и в соцсетях.{" "}
            <br /> 2) Доступ к аудитории 1000+ человек. <br />
            3) Возможность найти крутых специалистов.
          </p>
          <button className="expoBtn" onClick={() => navigate("/choice")}>
            Стать партнером
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default AboutSection;
