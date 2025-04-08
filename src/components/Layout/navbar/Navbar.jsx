import logo from "../../../assets/logo.svg";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {


  const navigate = useNavigate();

  return (
    <div className="bg2">
      <div className="container">
        <div className="navBlock_main">
          <img
            src={logo}
            alt="error"
            className="navBlock_logo"
          />
          <p className="navBlock_btn" onClick={() => navigate("/choice")}>
            Регистрация
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
