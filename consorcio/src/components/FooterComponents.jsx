import React from 'react'

import "../Styles/FooterComponents.css";
import logo from "../assets/icons/logo.png";

const FooterComponents = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Columna 1 - Logo */}
        <div className="footer-box logo-box">
          <img
            src={logo}
            alt="Logo del Consorcio del Edificio"
            className="footer-logo"
          />
          <p>Consorcio del Edificio</p>
        </div>

        {/* Columna 2 - Redes Sociales */}
        <div className="footer-box">
          <h4>Redes Sociales</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>

        {/* Columna 3 - Información Optativa */}
        <div className="footer-box">
          <h4>Contacto</h4>
          <p>Tel: +123 456 789</p>
          <p>Email: info@consorcio.com</p>
          <p>Dirección: Calle 123</p>
        </div>

      </div>

      <div className="footer-copy">
        <p>© {new Date().getFullYear()} GestorAPP</p>
      </div>

    </footer>
  );
};

export default FooterComponents;