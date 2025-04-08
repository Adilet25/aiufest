import logo from "../../../assets/logo.svg";
import what from "../../../assets/footer/whatsapp.svg";
import inst from "../../../assets/footer/instagram.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="footerBlock">
        <div className="footerInfo_Block">
          <div className="footerInfo">
            <img loading="lazy" src={logo} alt="" className="footerLogo" />
            <div className="footerInfo_nav">
              <p>Адрес: Адреc г. Бишкек Ул. Анкара 1/8</p>
              <p>+996 555 820 000</p>
              <p>sch@alatoo.edu.kg</p>
            </div>
            <div className="footerSocial_Block">
              <a href="https://wa.me/996555820000" target="_blank">
                <img
                  loading="lazy"
                  src={what}
                  alt=""
                  className="footerSocial"
                />
              </a>
              <a
                href="https://www.instagram.com/alatoo.edu.kg?igsh=c2Nlb2xzdTZ0d2J3"
                target="_blank"
              >
                <img
                  loading="lazy"
                  src={inst}
                  alt=""
                  className="footerSocial"
                />
              </a>
            </div>
          </div>
          <p id="footer_licen">© 2025 Ala-Too International University Все права зашищены</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
