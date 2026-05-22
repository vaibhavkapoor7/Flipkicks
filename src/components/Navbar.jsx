import { Link } from "react-router-dom";

import {
  Search,
  Bell,
  ShoppingCart,
  ChevronDown,
} from "lucide-react";

import logo from "../assets/images/logo.png";
import profile from "../assets/images/profile.png";

import "../components css/navbar.css";

function Navbar() {

  return (

    <>
    
      {/* topbar */}

      <div className="topbar">

        <div className="container topbar-content">

          <p>
            Authentic Sneakers. Trusted Community. Legit Every Time.
          </p>

          <div className="topbar-right">

            <span>Download App</span>

            <span>Help</span>

            <div className="currency">
              USD <ChevronDown size={15} />
            </div>

          </div>

        </div>

      </div>

      {/* navbar */}

      <nav className="navbar">

        <div className="container nav-content">

          {/* left */}

          <div className="nav-left">

            {/* logo */}

            <Link to="/" className="logo">

              <img src={logo} alt="logo" />

            </Link>

            {/* links */}

            <ul className="nav-links">

              <li>
                <Link to="/" className="active">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/browse">
                  Browse
                </Link>
              </li>

              <li>
                <Link to="/sell">
                  Sell
                </Link>
              </li>

              <li>
                <Link to="/how-it-works">
                  How It Works
                </Link>
              </li>

              <li>
                <Link to="/about">
                  About
                </Link>
              </li>

            </ul>

          </div>

          {/* right */}

          <div className="nav-right">

            {/* search */}

            <div className="search-box">

              <Search size={20} />

              <input
                type="text"
                placeholder="Search sneakers, brands, etc."
              />

            </div>

            {/* icons */}

            <div className="nav-icons">

              <Bell />

              <ShoppingCart />

            </div>

            {/* profile */}

            <div className="profile">

              <img src={profile} alt="profile" />

            </div>

          </div>

        </div>

      </nav>

    </>
  );
}

export default Navbar;