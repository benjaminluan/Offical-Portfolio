import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  const [y, setY] = useState(window.screenY);
  const [scrollUp, setScrollUp] = useState(false);
  const scrollingUp = scrollUp === true && window.scrollY !== 0 ? "scrollup__effect": "";
  const scrollingDown = scrollUp === false && window.scrollY !== 0 ? "scrolldown__effect" : "";
  const navList = [
    "Home",
    "About",
    "Projects",
    <FontAwesomeIcon icon="adjust" />,
  ];

  const detectScroll = useCallback((e) => {
    if (y > window.scrollY) {
        setScrollUp(true)
      } else if (y < window.scrollY) {
        setScrollUp(false)
      }
      setY(window.scrollY)  
  },[y])

  useEffect(() => {
    window.addEventListener("scroll", detectScroll);
    return () => {
      window.removeEventListener("scroll", detectScroll);
    };
  }, [detectScroll]);


  return (
    <nav className={`${scrollingUp}` + `${scrollingDown}`}>
      <ul className="nav__list--container">
        {navList.map((list) => (
          <a href="/" className="nav__list--anchor" key={list}>
            <li className="nav__list">{list}</li>
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
