import React, { useState } from "react";
import "./navbar.css";
// import "./app.css"
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdMenu } from "react-icons/md";
import logo from "../../Assets/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("navBar");

  //function to toggle navigation bar
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  const closeNav = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <img src={logo} className="img_logo"/>
            {/* <MdOutlineTravelExplore className="icon" /> */}
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Package
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                News
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>
            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>
          <div onClick={closeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <MdMenu className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
