import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = ({ toggle }) => {
  const [y, setY] = useState(window.screenY);
  const [scrollUp, setScrollUp] = useState(false);
  const scrollingUp =
    scrollUp === true && window.scrollY !== 0 ? " scrollup__effect" : "";
  const scrollingDown =
    scrollUp === false && window.scrollY !== 0 ? " scrolldown__effect" : "";
  const navList = [
    { list: "Home", href: "/" },
    { list: "About", href: "#about" },
    { list: "Projects", href: "#projects" },
  ];

  const detectScroll = useCallback(
    (e) => {
      if (y > window.scrollY) {
        setScrollUp(true);
      } else if (y < window.scrollY) {
        setScrollUp(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    window.addEventListener("scroll", detectScroll);
    return () => {
      window.removeEventListener("scroll", detectScroll);
    };
  }, [detectScroll]);

  return (
    <nav className={"" + `${scrollingUp}` + `${scrollingDown}`}>
      <ul className="nav__list--container">
        {navList.map((list) => (
          <li className="nav__list" key={list.list}>
            <a href={list.href} className="nav__list--anchor dark__mode box__shadow-inset">
              {list.list}
            </a>
          </li>
        ))}
        <figure className="icon__adjust cursor" onClick={toggle}>
          <FontAwesomeIcon icon="fa-solid fa-adjust" />
        </figure>
      </ul>
    </nav>
  );
};

export default Nav;
