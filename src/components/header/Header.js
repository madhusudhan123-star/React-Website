import React from "react";
import "./header.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header class="header">
      <div class="navbar">
        <nav class="d-flex justify-content-center justify-content-md-between flex-wrap w-100 container">
          <div class="logoimg_div">
            <img src={logo} alt="" class="logoimg" />
          </div>
          <div class="navlist">
            <ul class="d-flex my-3 list-unstyled fs-3 text-light justify-content-center flex-wrap">
              <li class="mx-1 mx-md-3 nav">Services</li>
              <li class="mx-3 nav">Benefits</li>
              <li class="mx-3 nav">Features</li>
              <li class="mx-3 nav">Contact</li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="d-flex align-items-center flex-column heading">
        <h1 class="head text-center">Lorem ipsum dolor sit amet consec</h1>
        <button class="rounded-pill p-3 px-5 mt-5">Discover</button>
      </div>
    </header>
  );
};

export default Header;
