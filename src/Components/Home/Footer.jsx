import React from 'react';
import './Footer.css'; // Assuming you create a separate CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top-bar"></div>
      <div className="footer-content">
        <div className="footer-section">
          <img src="path-to-metacritic-logo" alt="" className="footer-logo" />
        </div>
        <div className="footer-section">
          <h4>Overview</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#help-center">Help Center</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#digital-services-act">Digital Services Act</a></li>
            <li><a href="#terms-of-use">Terms of Use</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#instagram"><i className="fab fa-instagram"></i></a>
            <a href="#twitter"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
        <div className="footer-section">
          {/* <h4>Explore Other Brands</h4> */}
          {/* <ul>
            <li><a href="#gamespot"><img src="path-to-gamespot-logo" alt="Gamespot" /></a></li>
            <li><a href="#giant-bomb"><img src="path-to-giant-bomb-logo" alt="Giant Bomb" /></a></li>
            <li><a href="#tv-guide"><img src="path-to-tv-guide-logo" alt="TV Guide" /></a></li>
            <li><a href="#gamefaqs"><img src="path-to-gamefaqs-logo" alt="GameFAQs" /></a></li>
          </ul> */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          flic | Your Ultimate Film Companion<br />
          © 2024. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
