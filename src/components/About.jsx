import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container">
          <p className="text-blk heading">About Us</p>
          <p className="text-blk subHeading">
            Welcome to Zwiggy – a culinary journey inspired by the visionary
            teachings of Akshay Saini, CEO of <a></a>
            <a href="https://namastedev.com/">namastedev.com</a>, a renowned
            figure in the realm of web development and an influential YouTube
            personality.
          </p>
          <p className="text-blk subHeading">
            Rooted in the transformative insights from Namaste React, Zwiggy
            isn't just a clone—it's a journey in React and JavaScript growth.
            Every line of code in crafting this application has been a hands-on
            exploration, a harmonious blend of creativity and practicality.
            Zwiggy represents more than just functionality; it's a testament to
            personal and technical evolution in the dynamic landscape of web
            development. Beyond coding, it's a commitment to excellence, an
            exploration of new frontiers, and a celebration of the joy of
            coding.
          </p>
          <p className="text-blk subHeading">
            #Zwiggy #NamasteReact #WebDevelopmentJourney 🚀🍔🖥️
          </p>

          <div className="social-icons-container">
            <Link
              className="social-icon"
              to="https://github.com/Shivam-yadav0206"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="socialIcon image-block"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb33.png"
              />
            </Link>
            <Link
              className="social-icon"
              to="https://www.linkedin.com/in/shivam-yadav-348a65220/"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="socialIcon image-block"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb34.png"
              />
            </Link>
            <Link
              className="social-icon"
              to="https://www.instagram.com/_s_h_i_va_m/"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="socialIcon image-block"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb35.png"
              />
            </Link>
            <Link
              className="social-icon"
              to="https://github.com/Shivam-yadav0206"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="socialIcon image-block"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb36.png"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
