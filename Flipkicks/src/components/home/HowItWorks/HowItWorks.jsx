import {
  Search,
  ShieldCheck,
  Truck
} from "lucide-react";

import "./HowItWorks.css";

function HowItWorks() {

  const steps = [

    {
      icon: <Search size={28} />,
      number: "01",
      title: "Browse Sneakers",
      text: "Explore premium sneakers from the hottest brands worldwide.",
    },

    {
      icon: <ShieldCheck size={28} />,
      number: "02",
      title: "Secure Checkout",
      text: "Every order is verified and protected with secure payment.",
    },

    {
      icon: <Truck size={28} />,
      number: "03",
      title: "Fast Delivery",
      text: "Get your sneakers delivered quickly with real-time tracking.",
    },

  ];

  return (

    <section className="how-it-works">

      {/* heading */}

      <div className="how-header">

        <span>
          HOW IT WORKS
        </span>

        <h2>
          Buy Sneakers
          <br />
          In 3 Easy Steps
        </h2>

      </div>

      {/* cards */}

      <div className="steps-grid">

        {steps.map((step, index) => (

          <div className="step-card" key={index}>

            <div className="step-top">

              <div className="step-icon">
                {step.icon}
              </div>

              <h3>
                {step.number}
              </h3>

            </div>

            <h4>
              {step.title}
            </h4>

            <p>
              {step.text}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default HowItWorks;