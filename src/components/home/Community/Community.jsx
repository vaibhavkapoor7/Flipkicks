import {
  FaInstagram,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

import "./Community.css";

function Community() {

  return (

    <section className="community">

      <div className="community-overlay"></div>

      <div className="community-content">

        <span>
          JOIN THE COMMUNITY
        </span>

        <h2>
          Connect With
          <br />
          Sneakerheads Worldwide
        </h2>

        <p>
          Stay updated on exclusive drops, sneaker news,
          giveaways and community events.
        </p>

        {/* form */}

        <div className="community-form">

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>
            Join Now
          </button>

        </div>

        {/* socials */}

        <div className="community-socials">

          <div className="social-icon">
            <FaInstagram />
          </div>

          <div className="social-icon">
            <FaTwitter />
          </div>

          <div className="social-icon">
            <FaYoutube />
          </div>

        </div>

      </div>

    </section>
  );
}

export default Community;