import { Link } from "react-router-dom";
import AboutImage from '../img/about.jpg'
const About = () => {
  return (
          <section id="about">
        <div class="container flex flex-col gap-10 md:flex-row">
          <div class="about__img flex-1">
            <img src={AboutImage} alt="about image" class="rounded-lg" />
          </div>

          <div class="about__content flex-1">
            <h2 class="section__title">FIND FOOD AND DRINKS, ALL-IN-ONE PLACE FOR YOUR BEST TASTE.</h2>
            <div class="separator"></div>
            <p class="paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
            <ul class="grid grid-cols-2 py-5 space-y-1">
              <li class="text-xs text-paragraphColor"> 
                <i class="fa-solid fa-check text-secondaryColor"></i> 
                Best Price
              </li>
              <li class="text-xs text-paragraphColor">
                <i class="fa-solid fa-check text-secondaryColor"></i> 
                Fresh Ingredient
              </li>
              <li class="text-xs text-paragraphColor"> 
                <i class="fa-solid fa-check text-secondaryColor"></i> 
                Best Service
              </li>
              <li class="text-xs text-paragraphColor">
                <i class="fa-solid fa-check text-secondaryColor"></i> 
                Health Protocol
              </li>
            </ul>
            <a href="" class="btn btn-primary">About us</a>
          </div>
        </div>
      </section>
  );
};

export default About;
