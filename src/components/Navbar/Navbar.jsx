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
  Menu,
  X,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

import logo from "../../assets/images/logo.png";
import profile from "../../assets/images/profile.png";

import { useCart } from "../../context/CartContext";
import { useCurrency, currencies } from "../../context/CurrencyContext";

import "./Navbar.css";

const initialNotifications = [
  { id: 1, title: "Order Shipped", message: "Your Air Jordan 1 Retro High OG is on its way.", time: "2h ago", read: false },
  { id: 2, title: "Price Drop", message: "A pair on your watchlist just dropped in price.", time: "5h ago", read: false },
  { id: 3, title: "New Message", message: "You have a new message from a buyer.", time: "1d ago", read: false },
  { id: 4, title: "Order Delivered", message: "Your Samba OG White Black was delivered.", time: "3d ago", read: true },
];

function Navbar() {

  const navigate = useNavigate();

  const { totalItems } = useCart();

  const [searchValue, setSearchValue] = useState("");

  const [menuOpen, setMenuOpen] = useState(false);

  const [notifOpen, setNotifOpen] = useState(false);

  const [notifications, setNotifications] = useState(initialNotifications);

  const notifRef = useRef(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const [currencyOpen, setCurrencyOpen] = useState(false);

  const { currency, setCurrency } = useCurrency();

  const currencyRef = useRef(null);

  /* close notifications dropdown on outside click */

  useEffect(() => {

    function handleClickOutside(e) {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotifOpen(false);
      }
    }

    if (notifOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [notifOpen]);

  /* close currency dropdown on outside click */

  useEffect(() => {

    function handleClickOutside(e) {
      if (currencyRef.current && !currencyRef.current.contains(e.target)) {
        setCurrencyOpen(false);
      }
    }

    if (currencyOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [currencyOpen]);

  function handleNotifToggle() {
    setNotifOpen((prev) => !prev);
  }

  function markAllRead() {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }

  function handleCurrencyToggle() {
    setCurrencyOpen((prev) => !prev);
  }

  function handleCurrencySelect(c) {
    setCurrency(c);
    setCurrencyOpen(false);
  }

  /* search */

  function handleSearch(e) {

    e.preventDefault();

    if (searchValue.trim() !== "") {

      navigate(`/browse?search=${searchValue}`);

      setMenuOpen(false);
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

            <span>Download App</span>

            <span>Help</span>

            <div className="currency-wrap" ref={currencyRef}>

              <button
                className="currency"
                onClick={handleCurrencyToggle}
                aria-expanded={currencyOpen}
                aria-label="Select currency"
              >
                {currency.code}
                <ChevronDown size={15} className={currencyOpen ? "currency-chevron-open" : ""} />
              </button>

              {currencyOpen && (
                <div className="currency-dropdown">
                  {currencies.map((c) => (
                    <button
                      key={c.code}
                      className={`currency-option ${c.code === currency.code ? "currency-option-active" : ""}`}
                      onClick={() => handleCurrencySelect(c)}
                    >
                      <span className="currency-option-symbol">{c.symbol}</span>
                      <span className="currency-option-code">{c.code}</span>
                      <span className="currency-option-label">{c.label}</span>
                    </button>
                  ))}
                </div>
              )}

            </div>

          </div>

        </div>

      </div>

      {/* navbar */}

      <nav className="navbar">

        <div className="container nav-content">

          {/* left */}

          <div className="nav-left">

            <Link to="/" className="logo">
              <img src={logo} alt="logo" />
            </Link>

            <ul className="nav-links">

              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/browse" className={({ isActive }) => isActive ? "active" : ""}>
                  Browse
                </NavLink>
              </li>

              <li>
                <NavLink to="/sell" className={({ isActive }) => isActive ? "active" : ""}>
                  Sell
                </NavLink>
              </li>

              <li>
                <NavLink to="/HowItWorks" className={({ isActive }) => isActive ? "active" : ""}>
                  How It Works
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                  About
                </NavLink>
              </li>

            </ul>

          </div>

          {/* right */}

          <div className="nav-right">

            {/* search */}

            <form className="search-box" onSubmit={handleSearch}>

              <Search size={20} />

              <input
                type="text"
                placeholder="Search sneakers, brands, etc."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />

            </form>

            {/* icons */}

            <div className="nav-icons">

              <div className="notif-wrap" ref={notifRef}>

                <button
                  className="notif-icon-wrap"
                  onClick={handleNotifToggle}
                  aria-label="Notifications"
                  aria-expanded={notifOpen}
                >
                  <Bell />
                  {unreadCount > 0 && (
                    <span className="notif-badge">{unreadCount}</span>
                  )}
                </button>

                {notifOpen && (
                  <div className="notif-dropdown">

                    <div className="notif-dropdown-header">
                      <h4>Notifications</h4>
                      {unreadCount > 0 && (
                        <button className="notif-mark-read" onClick={markAllRead}>
                          Mark all read
                        </button>
                      )}
                    </div>

                    <div className="notif-dropdown-list">
                      {notifications.length === 0 ? (
                        <div className="notif-empty">You're all caught up.</div>
                      ) : (
                        notifications.map((n) => (
                          <div
                            key={n.id}
                            className={`notif-item ${n.read ? "" : "notif-item-unread"}`}
                          >
                            <span className="notif-dot" />
                            <div className="notif-item-text">
                              <p className="notif-item-title">{n.title}</p>
                              <p className="notif-item-message">{n.message}</p>
                              <span className="notif-item-time">{n.time}</span>
                            </div>
                          </div>
                        ))
                      )}
                    </div>

                  </div>
                )}

              </div>

              <button className="cart-icon-wrap" onClick={() => navigate("/cart")}>
                <ShoppingCart size={24} />
                {totalItems > 0 && (
                  <span className="cart-badge">{totalItems}</span>
                )}
              </button>

            </div>

            {/* profile */}

            <div className="profile" onClick={() => navigate("/account")}>
              <img src={profile} alt="profile" />
            </div>

            {/* hamburger — only visible on mobile */}

            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>

        </div>

      </nav>

      {/* side nav overlay */}

      {menuOpen && (
        <div className="sidenav-overlay" onClick={() => setMenuOpen(false)} />
      )}

      {/* side nav drawer */}

      <div className={`sidenav ${menuOpen ? "sidenav-open" : ""}`}>

        {/* drawer header */}

        <div className="sidenav-header">
          <span className="sidenav-logo">FlipKicks</span>
          <button className="sidenav-close" onClick={() => setMenuOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* search */}

        <form className="mobile-search" onSubmit={handleSearch}>
          <Search size={18} />
          <input
            type="text"
            placeholder="Search sneakers, brands..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>

        {/* nav links */}

        <ul className="mobile-links">
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/browse" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
              Browse
            </NavLink>
          </li>
          <li>
            <NavLink to="/sell" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
              Sell
            </NavLink>
          </li>
          <li>
            <NavLink to="/HowItWorks" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
              How It Works
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
              About
            </NavLink>
          </li>
        </ul>

        {/* footer buttons */}

        <div className="mobile-menu-footer">
          <button
            className="mobile-cart-btn"
            onClick={() => { navigate("/cart"); setMenuOpen(false); }}
          >
            <ShoppingCart size={18} />
            Cart {totalItems > 0 && `(${totalItems})`}
          </button>
          <button
            className="mobile-account-btn"
            onClick={() => { navigate("/account"); setMenuOpen(false); }}
          >
            Account
          </button>
        </div>

      </div>

    </>
  );
}

export default Navbar;