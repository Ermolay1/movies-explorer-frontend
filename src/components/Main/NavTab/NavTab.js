import React from "react";

const NavTab = () => {
  return (
    <nav className="navtab">
      <ul className="navtab__links">
        <li><a className="navtab__link" href="#about-project">О проекте</a></li>
        <li><a className="navtab__link" href="#techs">Технологии</a></li>
        <li><a className="navtab__link" href="#about-me">Студент</a></li>
      </ul>
    </nav>
  );
};

export default NavTab;
