import React from "react";
import { Route, Routes } from 'react-router-dom';
import './Navigation.css';
import Links from '../LinkHeader/LinkHeader';
import NavigationPopup from '../NavigationPopup/NavigationPopup';
function Navigation() {
    
    
     
    return (
        <Routes>
        <Route exact path="/" element={<Links/>}>
          
        </Route>
        <Route exact path="/movies" element={<NavigationPopup/>}>
          
        </Route>
        
      </Routes>
  
     
    )
}

export default Navigation