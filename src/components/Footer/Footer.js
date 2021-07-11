import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="links">
        <h3>Useful Links</h3>
        <ul>
          <li>
            <a href="#top">Contact</a>
          </li>
          <li>
            <a href="#top">Careers</a>
          </li>
          <li>
            <a href="#top">Internships</a>
          </li>
          <li>
            <a href="#top">Support</a>
          </li>
        </ul>
      </div>
      <div className="links2">
        <h3>Legal</h3>
        <ul>
          <li>
            <a href="#top">© 2019 Lumber Solutions</a>
          </li>
          <li>
            <a href="#top">Terms & Conditions</a>
          </li>
          <li>
            <a href="#top">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
