import "./ChooseForm.css";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const ChooseForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        color="white"
      >
        <Link
          underline="hover"
          key="1"
          color="inherit"
          href="/"
          onClick={() => navigate("/")}
        >
          Главная
        </Link>
        ,
        <Link underline="hover" key="3" color="inherit">
          Регистрация
        </Link>
      </Breadcrumbs>
      <div>
        <div className="chooseRole_block">
          <h2>Регистрация</h2>
          <h3>Выберите свою роль участия:</h3>
          <div className="chooseRole_choice">
            <a className="choice3" target="_blank" href="https://forms.gle/Ei54shBWQvgvfqXW7">
              <h3>Для гостей</h3>
            </a>
            <a className="choice4"  target="_blank" href="https://forms.gle/WJwhDJ749bXHcXbN7">
              <h3>Для партнеров</h3>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseForm;
