import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <div className="container">
          <ul className="grid grid-cols-1 items-start gap-5 pb-5 md:grid-cols-2 lg:grid-cols-4">
            <li>
              <div className="space-y-3">
                <a href="" className="text-4xl font-oswald uppercase">
                  Food<span className="text-secondaryColor">Mata</span>
                </a>

                <p className="text-xs">
                  Rooted in the transformative insights from Namaste React,
                  FOODMATA isn't just a project—it's a journey in my React and
                  JavaScript growth. 
                </p>
              </div>
            </li>

            <li>
              <div className="flex flex-col gap-3">
                <h3 className="flex text-lg uppercase font-oswald justify-center">SUPPORT</h3>
                <button className="text-xs hover:text-secondaryColor">
                  FAQ's
                </button>
                <button className="text-xs hover:text-secondaryColor">
                  Privacy Policy
                </button>
                <button className="text-xs hover:text-secondaryColor">
                  Term & Condition
                </button>
                <button className="text-xs hover:text-secondaryColor">
                  Contact
                </button>
              </div>
            </li>

            <li className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-lg uppercase font-oswald">phone</h3>

                <p className="flex items-center gap-2 text-xs">
                  <i className="fa-solid fa-phone text-lg text-secondaryColor"></i>
                  +91 8090 934 5607
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg uppercase font-oswald">email</h3>

                <p className="flex items-center gap-2 text-xs">
                  <i className="fa-solid fa-envelope text-lg text-secondaryColor"></i>
                  shivam.yadav0206@outlook.com
                </p>
              </div>
            </li>

            <li className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-lg uppercase font-oswald">address</h3>

                <p className="flex items-center gap-2 text-xs">
                  <i className="fa-solid fa-location-dot text-lg text-secondaryColor"></i>
                  Noida
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg uppercase font-oswald">follow us</h3>

                <div className="space-x-3">
                  <Link
                    to="https://github.com/Shivam-yadav0206"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fa-brands fa-github text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200"></i>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/shivam-yadav-348a65220/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200"></i>
                  </Link>
                  <Link
                    to="https://www.instagram.com/_s_h_i_vam_/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fa-brands fa-square-instagram text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200"></i>
                  </Link>
                </div>
              </div>
            </li>
          </ul>

          <div className="flex flex-col items-center border-t border-primaryColorLight dark:border-darkColorLight py-5 md:flex-row md:justify-between">
            <p className="paragraph">Made with ❤️ by Shivam</p>
            <p className="paragraph">Copyright © 2024. All rights reserved.</p>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
