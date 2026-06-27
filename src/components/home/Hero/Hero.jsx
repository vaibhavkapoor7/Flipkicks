import { MoveRight, ShieldCheck, Truck, BadgeCheck } from "lucide-react";

import sneaker from "../../../assets/images/heroimage.png";

import "./Hero.css";

function Hero() {

  return (

    <section className="hero">

      <div className="container hero-content">

        {/* left */}

        <div className="hero-left">

          <span className="hero-tag">
            #1 Sneaker Marketplace
          </span>

          <h1>
            Buy. Sell.
            <br />
            Flip. <span>Legit.</span>
          </h1>

          <p>
            The most trusted marketplace for sneakerheads.
            Authentic. Secure. Fast.
          </p>

          {/* buttons */}

          <div className="hero-buttons">

            <button className="primary-btn">

              Browse Sneakers

              <MoveRight size={18} />

            </button>

            <button className="secondary-btn">

              Sell Yours

              <MoveRight size={18} />

            </button>

          </div>

          {/* features */}

          <div className="hero-features">

            <div className="feature">

              <ShieldCheck />

              <div>

                <h4>100% Authentic</h4>

                <span>Verified by experts</span>

              </div>

            </div>

            <div className="feature">

              <BadgeCheck />

              <div>

                <h4>Secure Payments</h4>

                <span>Safe & encrypted</span>

              </div>

            </div>

            <div className="feature">

              <Truck />

              <div>

                <h4>Fast Shipping</h4>

                <span>Worldwide delivery</span>

              </div>

            </div>

          </div>

        </div>

        {/* right */}

        <div className="hero-right">

          <img src={sneaker} alt="Sneaker" />

          {/* card */}

          <div className="hero-card">

            <h3>50K+</h3>

            <p>Happy Customers</p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;