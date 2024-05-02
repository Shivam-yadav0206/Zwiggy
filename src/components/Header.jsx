import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useOnline from "../utils/useOnline";

function Header({setTheme, theme}) {
  const cart = useSelector((store) => store.cart.items);
  const isOnline = useOnline();

  return (
    // <div className="nav">
    //   <input type="checkbox" id="nav-check" />
    //   <div className="nav-header">
    //     <div className="nav-title">
    //       <img data-testid="logo" src={Logo} alt="Logo" width={70} />
    //       <Link to="/">Zwiggy</Link>
    //     </div>
    //   </div>
    //   <div className="nav-btn">
    //     <label htmlFor="nav-check">
    //       <span></span>
    //       <span></span>
    //       <span></span>
    //     </label>
    //   </div>

    //   <div className="nav-links">
    //     <Link className="list" to="/">
    //       Home
    //     </Link>
    //     <Link className="list" to="/about">
    //       About
    //     </Link>
    //     <Link className="list" to="/contact">
    //       Contact Us
    //     </Link>
    //     <Link className="list" to="/instamart">
    //       InstaMart
    //     </Link>
    // <Link className="list" to="/cart">
    //   Cart - {cart.length} {isOnline ? "🟢" : "🔴"}
    // </Link>
    //   </div>
    // </div>
    <header
      className="bg-primaryColor dark:bg-darkColor fixed top-0 left-0 w-full z-50"
      id="header">
      <nav className="container relative h-14 flex justify-between items-center">
        <div>
          <a href="#" className="text-2xl uppercase  font-oswald">
            Food<span className="text-secondaryColor">Mata</span>
          </a>
        </div>

        <div
          className="hidden absolute top-0 left-0 w-full py-14 bg-primaryColor dark:bg-darkColor border-b border-secondaryColor md:block md:static md:py-0 md:border-none md:w-auto md:ml-auto"
          id="nav-menu">
          <ul className="flex flex-col text-center gap-5 md:flex-row">
            <li>
              <Link className="list" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="list" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="list" to="/contact">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="list" to="/instamart">
                InstaMart
              </Link>
            </li>
            <li>
              <Link className="list" to="/cart">
                Cart - {cart.length} {isOnline ? "🟢" : "🔴"}
              </Link>
            </li>
          </ul>

          <div
            className="absolute top-[0.7rem] right-4 text-2xl cursor-pointer md:hidden"
            id="nav-close">
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <i
            onClick={() => setTheme((prevTheme) => prevTheme === "dark"? setTheme("light"): setTheme("dark"))}
            className={`${
              theme === "dark" ? "ri-sun-line" : "ri-moon-line"
            } cursor-pointer ml-4 text-xl`}
            id="theme-toggle"></i>
          <p>{theme }</p>

          <div className="md:hidden" id="hamburger">
            <i className="ri-menu-2-line cursor-pointer text-xl"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
