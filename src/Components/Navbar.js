import React, { useState, useEffect } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=8"
        alt="Neflix logo"
        className="logo"
      />
      <img
        src="https://icon-library.com/images/customer-login-icon/customer-login-icon-8.jpg"
        alt="nothing"
        className="avatar"
      />
    </div>
  );
};

export default Navbar;
