import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../images/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const closeMenu = () => setNav(false);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link
        to="Home"
        activeClass="active"
        spy={true}
        smooth={true}
        onClick={closeMenu}
        className="logo"
      >
        <img src={logo} alt="" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link
            to="Header"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={closeMenu}
          >
            Header
          </Link>
        </li>
        <li>
          <Link
            to="Features"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
            onClick={closeMenu}
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            to="Offer"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={closeMenu}
          >
            Offer
          </Link>
        </li>
        <li>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
