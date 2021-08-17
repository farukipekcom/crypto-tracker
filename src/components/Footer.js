import React from "react";
import "../styles/Footer.css";
import { Facebook, Twitter, Linkedin, Github } from "../assets/icons";
function Footer() {
  return (
    <div className="footer">
      <div className="content">
        <div className="social-links">
          <a href="https://facebook.com/farukipekcom">
            <Facebook />
          </a>
          <a href="https://twitter.com/farukipekcom">
            <Twitter />
          </a>
          <a href="https://linkedin.com/in/farukipekcom">
            <Linkedin />
          </a>
          <a href="https://github.com/farukipekcom">
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
