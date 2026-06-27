import {
  Link,
  NavLink,
  useNavigate
} from "react-router-dom";

import {
  Search,
  Bell,
  ShoppingCart,
  ChevronDown,
} from "lucide-react";

import { useState } from "react";

import logo from "../../assets/images/logo.png";
import profile from "../../assets/images/profile.png";

import { useCart } from "../../context/CartContext";

import "./Navbar.css";

function Navbar() {

  const navigate =
  useNavigate();

  const { totalItems } = useCart();

  const [searchValue,
  setSearchValue] =
  useState("");

  /* search */

  function handleSearch(e){

    e.preventDefault();

    if(searchValue.trim() !== ""){

      navigate(

        `/browse?search=${searchValue}`

      );
    }
  }

  return (

    <>

      {/* topbar */}

      <div className="topbar">

        <div className="container topbar-content">

          <p>
            Authentic Sneakers. Trusted Community. Legit Every Time.
          </p>

          <div className="topbar-right">

            <span>
              Download App
            </span>

            <span>
              Help
            </span>

            <div className="currency">

              USD

              <ChevronDown size={15} />

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

            <Link
              to="/"
              className="logo"
            >

              <img
                src={logo}
                alt="logo"
              />

            </Link>

            {/* links */}

            <ul className="nav-links">

              <li>

                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "active"
                      : ""
                  }
                >

                  Home

                </NavLink>

              </li>

              <li>

                <NavLink
                  to="/browse"
                  className={({ isActive }) =>
                    isActive
                      ? "active"
                      : ""
                  }
                >

                  Browse

                </NavLink>

              </li>

              <li>

                <NavLink
                  to="/sell"
                  className={({ isActive }) =>
                    isActive
                      ? "active"
                      : ""
                  }
                >

                  Sell

                </NavLink>

              </li>

              <li>

                <NavLink
                  to="/HowItWorks"
                  className={({ isActive }) =>
                    isActive
                      ? "active"
                      : ""
                  }
                >

                  How It Works

                </NavLink>

              </li>

              <li>

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "active"
                      : ""
                  }
                >

                  About

                </NavLink>

              </li>

            </ul>

          </div>

          {/* right */}

          <div className="nav-right">

            {/* search */}

            <form

              className="search-box"

              onSubmit={handleSearch}

            >

              <Search size={20} />

              <input

                type="text"

                placeholder="Search sneakers, brands, etc."

                value={searchValue}

                onChange={(e) =>
                  setSearchValue(
                    e.target.value
                  )
                }

              />

            </form>

            {/* icons */}

                <div className="nav-icons">
      <Bell />

      <button className="cart-icon-wrap" onClick={() => navigate("/cart")}>
        <ShoppingCart size={24} />
        {totalItems > 0 && (
          <span className="cart-badge">{totalItems}</span>
        )}
      </button>
    </div>


            {/* profile */}

            <div className="profile" onClick={() => navigate("/account")}>

              <img
                src={profile}
                alt="profile"
              />

            </div>

          </div>

        </div>

      </nav>

    </>
  );
}

export default Navbar;