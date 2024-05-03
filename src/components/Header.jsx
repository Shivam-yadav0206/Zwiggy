import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useOnline from "../utils/useOnline";
import { useParams, useLocation } from "react-router-dom";

function Header({ setTheme, theme }) {
  useEffect(() => {
    const handleNavLinkClick = () => {
      const navMenu = document.getElementById("nav-menu");
      navMenu.classList.add("hidden");
    };

    const handleNavCloseClick = () => {
      const navMenu = document.getElementById("nav-menu");
      navMenu.classList.add("hidden");
    };

    const handleHamburgerClick = () => {
      const navMenu = document.getElementById("nav-menu");
      navMenu.classList.remove("hidden");
    };

    const navLinkElements = document.querySelectorAll(".nav__link");
    const closeIcon = document.getElementById("nav-close");
    const hamburger = document.getElementById("hamburger");

    navLinkElements.forEach((link) =>
      link.addEventListener("click", handleNavLinkClick)
    );

    closeIcon.addEventListener("click", handleNavCloseClick);
    hamburger.addEventListener("click", handleHamburgerClick);

    // Cleanup event listeners on unmount
    return () => {
      navLinkElements.forEach((link) =>
        link.removeEventListener("click", handleNavLinkClick)
      );
      closeIcon.removeEventListener("click", handleNavCloseClick);
      hamburger.removeEventListener("click", handleHamburgerClick);
    };
  }, []);
  const location = useLocation();
  const address = location.pathname;
  console.log(address);
  const cart = useSelector((store) => store.cart.items);
  const isOnline = useOnline();

  return (
    <header
      className="bg-primaryColor dark:bg-darkColor fixed top-0 left-0 w-full z-50"
      id="header">
      <nav className="container relative h-14 flex justify-between items-center">
        <div>
          <a href="/" className="text-2xl uppercase  font-oswald">
            Food<span className="text-secondaryColor">Mata</span>
          </a>
        </div>

        <div
          className="hidden absolute top-0 left-0 w-full py-14 bg-primaryColor dark:bg-darkColor border-b border-secondaryColor md:block md:static md:py-0 md:border-none md:w-auto md:ml-auto"
          id="nav-menu">
          <ul className="flex flex-col text-center gap-5 md:flex-row">
            <li>
              <Link
                className={` list ${
                  address === "/" ? "text-secondaryColor" : ""
                } `}
                to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  address === "/about" ? "text-secondaryColor" : ""
                } list`}
                to="/about">
                About
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  address === "/contact" ? "text-secondaryColor" : ""
                } list`}
                to="/contact">
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  address === "/instamart" ? "text-secondaryColor" : ""
                } list`}
                to="/instamart">
                InstaMart
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  address === "/cart" ? "text-secondaryColor" : ""
                } list`}
                to="/cart">
                Cart - {cart.length} {isOnline ? "🟢" : "🔴"}
              </Link>
            </li>
          </ul>

          <div
            className="absolute top-[0.7rem] right-4 text-2xl cursor-pointer md:hidden"
            id="nav-close">
            <i className="ri-close-line" style={{ color: "yellow" }}></i>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <i
            onClick={() =>
              setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
            }
            className={`${
              theme === "dark" ? "ri-sun-line" : "ri-moon-line"
            } cursor-pointer ml-4 text-xl`}
            id="theme-toggle"></i>

          <div className="md:hidden" id="hamburger">
            <i className="ri-menu-2-line cursor-pointer text-xl"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
