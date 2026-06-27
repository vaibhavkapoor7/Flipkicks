import { useNavigate } from "react-router-dom";
import {
  Search,
  ShieldCheck,
  Truck,
  DollarSign,
  Package,
  BadgeCheck
} from "lucide-react";

import "../pages-css/HowItWorks.css";

function HowItWorks() {

const navigate = useNavigate();

  const buySteps = [

    {
      icon: <Search />,
      title: "Browse Sneakers",
      text: "Discover authentic sneakers from trusted sellers."
    },

    {
      icon: <ShieldCheck />,
      title: "Authentication Check",
      text: "Every pair goes through our verification process."
    },

    {
      icon: <Truck />,
      title: "Fast Delivery",
      text: "Receive your sneakers safely at your doorstep."
    }

  ];

  const sellSteps = [

    {
      icon: <Package />,
      title: "List Your Pair",
      text: "Upload photos and create your listing."
    },

    {
      icon: <BadgeCheck />,
      title: "Verification",
      text: "Ship your pair to us for inspection."
    },

    {
      icon: <DollarSign />,
      title: "Get Paid",
      text: "Receive payment after successful verification."
    }

  ];

  return (

      <section className="how-page">

        {/* Hero */}

        <div className="how-hero">

          <span>
            How FlipKicks Works
          </span>

          <h1>
            Buy & Sell Sneakers
            With Confidence
          </h1>

          <p>
            Every sneaker sold on FlipKicks
            is authenticated before reaching
            buyers.
          </p>

        </div>

        {/* Buy */}

        <section className="steps-section">

          <h2>
            Buying Sneakers
          </h2>

          <div className="steps-grid">

            {buySteps.map((step,index)=>(

              <div
                key={index}
                className="step-card"
              >

                <div className="step-icon">
                  {step.icon}
                </div>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.text}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* Sell */}

        <section className="steps-section">

          <h2>
            Selling Sneakers
          </h2>

          <div className="steps-grid">

            {sellSteps.map((step,index)=>(

              <div
                key={index}
                className="step-card"
              >

                <div className="step-icon">
                  {step.icon}
                </div>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.text}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* Authentication */}

        <section className="authentication">

          <h2>
            Our Authentication Process
          </h2>

          <p>

            Our experts inspect every pair
            using a multi-point verification
            process including materials,
            stitching, packaging and serial
            details.

          </p>

        </section>

        {/* CTA */}

        <section className="how-cta">

          <h2>
            Ready To Join FlipKicks?
          </h2>

          <button
      className="cta-btn"
      onClick={() => navigate("/browse")}
    >
      Start Shopping
    </button>

        </section>

      </section>

  );
}

export default HowItWorks;