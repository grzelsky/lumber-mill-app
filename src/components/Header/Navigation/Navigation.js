import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import axesBW from "../../../images/navIcons/axes_bw.png";
import axesColor from "../../../images/navIcons/axes_color.png";

const navList = [
  {
    name: "what we do",
    path: "/whatwedo",
  },
  {
    name: "our team",
    path: "/ourteam",
  },
  {
    name: "contact with us",
    path: "/contact",
  },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  const scrollNav = () => {
    const isTop = window.scrollY > 150;
    if (isTop) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollNav);
  }, []);

  const menu = navList.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path} className={scrolled ? "scrolled" : "a"}>
        {" "}
        {item.name}{" "}
      </NavLink>{" "}
    </li>
  ));
  return (
    <nav className={scrolled ? "scrolled" : "nav"}>
      <div className="logo">
        <NavLink to="/">
          {scrolled ? (
            <img className="axes" src={axesColor} alt="" />
          ) : (
            <img className="axes" src={axesBW} alt="" />
          )}
          <div class="companyName">
            <p className={scrolled ? "scrolled" : "p"}> lumber </p>
            <p className={scrolled ? "scrolled" : "p"}> solutions </p>
          </div>
        </NavLink>
      </div>
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;
