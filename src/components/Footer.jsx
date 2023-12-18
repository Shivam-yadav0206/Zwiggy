import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-distributed footer-parent">
      <div className="footer-left">
        <h3>
          <img
            margin="10px"
            width={150}
            src="https://img.freepik.com/free-photo/diet-health-nutrition-life-food-eating-concept_53876-120817.jpg?w=1060&t=st=1700734100~exp=1700734700~hmac=6511f79676014d9e4b00b6c0156ea5b230292563a064b446d278a4059c8be8e1"
          />
        </h3>

        <p className="footer-links">
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
          <Link to="/contact">Contact Us </Link>
          <Link to="/instamart">InstaMart </Link>
        </p>

        <p className="footer-company-name">Zwiggy © 2023</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>Sector 214 Noida, IN</span> Uttar Pradesh, India
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+91 8090934506</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:shivam.yadav0206@outlook.com">
              shivam.yadav0206@outlook.com
            </a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Zwiggy is a popular food delivery and restaurant discovery platform,
          connecting users with diverse culinary experiences.
        </p>

        <div className="footer-icons">
          <Link
            to="https://www.instagram.com/_s_h_i_va_m/"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fa fa-instagram"></i>
          </Link>
          <Link
            to="https://www.linkedin.com/in/shivam-yadav-348a65220/"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fa fa-linkedin"></i>
          </Link>
          <Link to="/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter"></i>
          </Link>
          <Link
            to="https://github.com/Shivam-yadav0206"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fa fa-github"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
