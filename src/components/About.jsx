import { Link } from "react-router-dom";
import AboutImage from "../img/about.jpg";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import { sr } from "../utils/helper";
const About = () => {
  useEffect(() => {
    sr.reveal(".about__img", { origin: "bottom" });
    sr.reveal(".about__content", { origin: "top" });

    // Clean up ScrollReveal instance on component unmount
    return () => {
      sr.destroy();
    };
  }, []);
  return (
    <section id="about">
      <div className="container flex flex-col gap-10 md:flex-row">
        <div className="about__img flex-1">
          <img src={AboutImage} alt="about image" className="rounded-lg" />
        </div>

        <div className="about__content flex-1">
          <h2 className="section__title">
            FIND FOOD AND DRINKS, ALL-IN-ONE PLACE FOR YOUR BEST TASTE.
          </h2>
          <div className="separator"></div>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </p>
          <ul className="grid grid-cols-2 py-5 space-y-1">
            <li className="text-xs text-paragraphColor">
              <i className="fa-solid fa-check text-secondaryColor"></i>
              Best Price
            </li>
            <li className="text-xs text-paragraphColor">
              <i className="fa-solid fa-check text-secondaryColor"></i>
              Fresh Ingredient
            </li>
            <li className="text-xs text-paragraphColor">
              <i className="fa-solid fa-check text-secondaryColor"></i>
              Best Service
            </li>
            <li className="text-xs text-paragraphColor">
              <i className="fa-solid fa-check text-secondaryColor"></i>
              Health Protocol
            </li>
          </ul>
          <a href="" className="btn btn-primary">
            About us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
