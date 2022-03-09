import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <section class="footer">
      <div class="footer_div">
        <div class="img_div">
          <img src={logo} alt="" />
          <p>Copyright © 2022</p>
        </div>
        <div class="menu_div">
          <ul class="list-unstyled">
            <li>Services</li>
            <li>Benefits</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
        </div>
        <div class="social d-flex gap-5">
          <i class="fab fa-twitter"></i>
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-linkedin-in"></i>
          <i class="fab fa-instagram"></i>
        </div>
      </div>
    </section>
  );
};

export default Footer;
