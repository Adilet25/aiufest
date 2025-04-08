// import ai from "../../../assets/workimg/ai.png";
// import ad from "../../../assets/workimg/ad.png";
// import author from "../../../assets/workimg/author.png";
// import cyber from "../../../assets/workimg/cyber.png";
// import inno from "../../../assets/workimg/inno.png";
// import inv from "../../../assets/workimg/inv.png";
// import itprod from "../../../assets/workimg/itprod.png";
// import ownbrand from "../../../assets/workimg/ownbrand.png";
// import manage from "../../../assets/workimg/manage.png";

import "./WorkSection.css";

const WorkSection = () => {
  return (
    <div className="container">
      <div className="workBlock_main">
        <h2 className="workBlock_title">Программа</h2>
        <div className="workBlock_list">
          <div className="workList_item item1">
            <p className="workList_item_title">Встреча с факультетами</p>
            <div className="workList_item_text">
              <p>
                Встреча абитуриентов и родителей <br />
                Распределение по аудиториям <br />
                Информационные сессии вопрос ответы <br />
                Кампус туры
              </p>
            </div>
          </div>
          <div className="workList_item item2">
            <p className="workList_item_title">Ярмарка вакансий</p>
            <div className="workList_item_text">
              <p>
                Открытие ярмарки <br />
                Информационные сессии
                <br /> Выступления кампаний
                <br /> Игры конкурсы
                <br /> Розыгрыш призов
              </p>
            </div>
          </div>
          <div className="workList_item item3">
            <p className="workList_item_title">Концерт</p>
            <div className="workList_item_text">
              <p>
                Благотворительная ярмарка еды <br />
                Знакомство с кухней разных культур
                <br /> Игры и конкурсы
                <br /> Парад дружбы <br />
                Завершающий концерт
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
