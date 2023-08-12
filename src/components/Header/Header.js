/* eslint-disable no-restricted-globals */
import React from "react";
import LogoLink from "./LogoLink/LogoLink";
import Navigation from "../Navigation/Navigation";
import MobileMenuButton from "../MobileMenuButton/MobileMenuButton";

const Header = ({loggedIn, clickOpenMenu}) => {

  return (
    <>
    {
      location.pathname === '/' && (
    <header  className="header && header_color">
      <LogoLink/>
      <Navigation loggedIn={loggedIn}/>
      {loggedIn && <MobileMenuButton clickOpenMenu={clickOpenMenu}/>}
    </header>)}
    { 
      location.pathname === '/movies'&& (
     <header  className="header ">
      <LogoLink/>
      <Navigation loggedIn={loggedIn}/>
      {loggedIn && <MobileMenuButton clickOpenMenu={clickOpenMenu}/>}
    </header>)}
    { 
      location.pathname === '/saved-movies'&& (
     <header  className="header ">
      <LogoLink/>
      <Navigation loggedIn={loggedIn}/>
      {loggedIn && <MobileMenuButton clickOpenMenu={clickOpenMenu}/>}
    </header>)}
    { 
      location.pathname === '/profile'&& (
     <header  className="header ">
      <LogoLink/>
      <Navigation loggedIn={loggedIn}/>
      {loggedIn && <MobileMenuButton clickOpenMenu={clickOpenMenu}/>}
    </header>)}
    </>
  );
};

export default Header;
