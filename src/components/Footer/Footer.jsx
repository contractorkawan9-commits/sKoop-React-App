import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

/**
 * Footer component displayed at the bottom of every page.
 * It contains brand information, quick navigation links, contact details, social media links, and copyright information.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footerContainer">
      <div className="footerContent">
        {/* Brand Section */}
        <div className="footerSection">
          <div className="footerBrand">sKoop & wHoop</div>
          <p className="footerText">
            Crafting moments of joy, one scoop at a time. Indulge in our premium
            flavors and let your imagination take the lead.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footerSection">
          <h3 className="footerHeading">Quick Links</h3>
          <ul className="footerLinks">
            <li className="footerLinkItem">
              <Link to="/" className="footerLink">
                Home
              </Link>
            </li>
            <li className="footerLinkItem">
              <Link to="/flavours" className="footerLink">
                Our Flavours
              </Link>
            </li>
            <li className="footerLinkItem">
              <Link to="/offers" className="footerLink">
                Special Offers
              </Link>
            </li>
                                    <li className="footerLinkItem">
                                      <Link to="/about" className="footerLink">About Us</Link>
                                    </li>
                                    <li className="footerLinkItem">
                                      <Link to="/location" className="footerLink">Location</Link>
                                    </li>          </ul>
        </div>

        {/* Contact & Social */}
        <div className="footerSection">
          <h3 className="footerHeading">Connect With Us</h3>
          <p className="footerText">
            📍 Vasai Road, Palghar 401202
            <br />
            📞 +91 123 456 7890
            <br />
            ✉️ hello@skoopwhoop.com
          </p>

          <div className="socialLinks">
            <a href="#" className="socialIcon" aria-label="Instagram">
              IG
            </a>
            <a href="#" className="socialIcon" aria-label="Facebook">
              FB
            </a>
            <a href="#" className="socialIcon" aria-label="Twitter">
              X
            </a>
            <a href="#" className="socialIcon" aria-label="Youtube">
              YT
            </a>
          </div>
        </div>
      </div>

      {/* Copyright and Bottom Text */}
      <div className="footerBottom">
        <p>
          &copy; {currentYear} sKoop & wHoop. All rights reserved. | Made with{" "}
          <span className="heart">❤</span> for Ice Cream Lovers.
        </p>
      </div>
    </footer>
  );
}
