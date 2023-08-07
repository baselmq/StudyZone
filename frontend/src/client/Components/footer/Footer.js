import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./footer.css";
import logo from "../../assets/icons/logo-white.svg";
const Footer = () => {
  return (
    <footer className="container-fluid footer">
      <div className="container text-center">
        <img src={logo} alt="logo" className="footer-logo" />
      </div>

      <div className="d-flex justify-content-center align-items-center gap-5 mt-5">
        <a href="#" className="footer-links">
          HOME
        </a>
        <a href="#" className="footer-links">
          ABOUT
        </a>
        <a href="#" className="footer-links">
          COURSES
        </a>
        <a href="#" className="footer-links">
          CATEGORY
        </a>
        <a href="#" className="footer-links">
          CONTENT
        </a>
      </div>
      <div className="d-flex justify-content-center align-items-center gap-4 mt-4">
        <div className="footer-social-media">
          <i className="fa-brands fa-square-facebook"></i>
        </div>
        <div className="footer-social-media">
          <i className="fa-brands fa-square-instagram"></i>
        </div>
        <div className="footer-social-media">
          <i className="fa-brands fa-square-x-twitter"></i>
        </div>
        <div className="footer-social-media">
          <i className="fa-brands fa-linkedin"></i>
        </div>
      </div>

      <div className="footer-bottom d-flex justify-content-center align-items-center gap-4 mt-5">
        Copyright ©2023 All rights reserved | Careers | Privacy Policy | Terms &
        Conditions
      </div>
    </footer>
  );
};

export default Footer;
