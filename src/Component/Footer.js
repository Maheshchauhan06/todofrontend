import React from "react";
import "./style.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <p>copyright © {year}</p>
    </footer>
  );
}

export default Footer;
