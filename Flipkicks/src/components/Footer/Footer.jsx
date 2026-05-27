import {
  FaInstagram,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

import "./Footer.css";
import logo from "../../assets/images/logo.png"

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-content">

        {/* left */}

        <div className="footer-brand">
          
          
<img className="img"
            src={logo}
            alt="FlipKicks Logo"
          />
          <p>
            Premium sneaker marketplace for buying,
            selling and discovering authentic sneakers.
          </p>

          <div className="footer-socials">

            <div className="footer-icon">
              <FaInstagram />
            </div>

            <div className="footer-icon">
              <FaTwitter />
            </div>

            <div className="footer-icon">
              <FaYoutube />
            </div>

          </div>

        </div>

        {/* links */}

        <div className="footer-links">

          <div className="footer-column">

            <h4>
              Marketplace
            </h4>

            <a href="/">
              Browse Sneakers
            </a>

            <a href="/">
              New Arrivals
            </a>

            <a href="/">
              Top Sellers
            </a>

          </div>

          <div className="footer-column">

            <h4>
              Company
            </h4>

            <a href="/">
              About Us
            </a>

            <a href="/">
              Careers
            </a>

            <a href="/">
              Contact
            </a>

          </div>

          <div className="footer-column">

            <h4>
              Support
            </h4>

            <a href="/">
              Help Center
            </a>

            <a href="/">
              Privacy Policy
            </a>

            <a href="/">
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

      {/* bottom */}

      <div className="footer-bottom">

        <p>
          © 2026 FlipKicks. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;