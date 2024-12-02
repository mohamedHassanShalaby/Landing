import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <h2>A Price To Suit Everyone</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
          </p>
          <div className="span1">
            <span>40$</span>
          </div>
          <div className="te">
            <i>UI Design Kit</i>
          </div>
          <div className="span2">
            <span>See, One price. Simple.</span>
          </div>
          <button>Purchase Now</button>
        </div>
      </footer>
      <section>
        <div className="container">
          <div className="flex">
            <span>&copy; 2023 Yourcompany</span>
            <div className="logo">
              <h1>Header</h1>
            </div>
            <button>Purchase</button>
          </div>
        </div>
        <div className="container">
          <div className="flex">
            <ul className="ul">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/powerfull">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
            <div className=""></div>
            <div className="icons">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedin />
              <FaYoutube />
              <FaInstagram />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
