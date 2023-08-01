import React from "react";
import './Navigation.css';
import Links from '../LinkHeader/LinkHeader';
import NavigationPopup from '../NavigationPopup/NavigationPopup';

function Navigation() {
     return (
      <>
        {
          // eslint-disable-next-line no-restricted-globals
          location.pathname === '/' && (
            <Links/> 
          )
        }
        {
          // eslint-disable-next-line no-restricted-globals
          location.pathname === '/movies' && (
            <NavigationPopup/> 
          )
        }
        {
          // eslint-disable-next-line no-restricted-globals
          location.pathname === '/saved-movies' && (
            <NavigationPopup/> 
          )
        }
      </>  
    )
}

export default Navigation