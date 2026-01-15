import React from 'react'

import "../Styles/InquilinoPage.css";
import Navbar from '../components/Navbar';
import HeaderInquilino from "../components/HeaderInquilino";
import AsideMenu from "../components/AsideMenu";
import MainContent from "../components/MainContent";
import AsideMessages from "../components/AsideMessages";

const InquilinosPage = () => {
  return (
    <div className="inquilinos-layout">
      <HeaderInquilino />

      <div className="body-layout">
        <AsideMenu />
        <MainContent />
        <AsideMessages />
      </div>
    </div>
  );
};

export default InquilinosPage;