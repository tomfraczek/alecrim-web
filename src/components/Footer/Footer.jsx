import React from "react";
import MainLogo from '../Navbar/img/alecrim-logo.png';
import { Link } from "react-router-dom";


const Footer = () => {
  return(
    <div className="footer">
      <div className="footer-container container">
        <div className="footer__logo-container">
          <img src={MainLogo} alt="" />
        </div>

        <div className="footer-column__container">
          <div className="footer__column">
            <Link to='/'>About Us</Link>
            <Link to='/'>Contact Us</Link>
            <Link to='/'>Academy</Link>
            <Link to='/'>Alecrim</Link>
          </div>

          <div className="footer__column">
            <Link to='/'>Capoeira</Link>
            <Link to='/'>History</Link>
            <Link to='/'>Music</Link>
            <Link to='/'>Muzenza</Link>
          </div>

          <div className="footer__column">
            <Link to='/'>Projects</Link>
            <Link to='/'>Trainings</Link>
            <Link to='/'>Cord System</Link>
            <Link to='/'>Gym</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;