import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Camera,
  Package,
  Truck,
  DollarSign,
  ShieldCheck,
  BadgeCheck,
  TrendingUp,
  ChevronDown,
  Upload,
} from "lucide-react";

import "../pages-css/Sell.css";

const steps = [
  {
    icon: <Camera />,
    title: "List Your Pair",
    text: "Upload clear photos and fill in the details — brand, size, condition, and your asking price.",
  },
  {
    icon: <Truck />,
    title: "Ship To Us",
    text: "Once a buyer is matched, ship your sneakers to our authentication centre using our prepaid label.",
  },
  {
    icon: <DollarSign />,
    title: "Get Paid",
    text: "After our experts verify authenticity, payment is released directly to your account within 2 business days.",
  },
];

const benefits = [
  {
    icon: <ShieldCheck />,
    title: "Seller Protection",
    text: "Every transaction is fully protected. We handle disputes so you never have to worry.",
  },
  {
    icon: <BadgeCheck />,
    title: "Instant Credibility",
    text: "Our authentication badge builds buyer trust and helps your listings sell faster.",
  },
  {
    icon: <TrendingUp />,
    title: "Best Price",
    text: "Our market-price insights help you set a competitive price and maximise your profit.",
  },
  {
    icon: <Package />,
    title: "Hassle-Free",
    text: "We provide prepaid shipping labels, packing guidance, and real-time tracking for every order.",
  },
];

const conditions = ["Deadstock / Brand New", "Like New", "Good", "Fair"];

const sizes = [
  "UK 5", "UK 5.5", "UK 6", "UK 6.5", "UK 7", "UK 7.5",
  "UK 8", "UK 8.5", "UK 9", "UK 9.5", "UK 10", "UK 10.5",
  "UK 11", "UK 11.5", "UK 12", "UK 13",
];

function Sell() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    sneakerName: "",
    brand: "",
    size: "",
    condition: "",
    price: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
      <section className="sell-page">

        {/* ── Hero ── */}
        <div className="sell-hero">
          <span className="sell-badge">Sell On FlipKicks</span>
          <h1>Turn Your Kicks<br />Into <span className="sell-accent">Cash</span></h1>
          <p>
            List your sneakers in minutes. We authenticate every pair,
            so buyers trust you — and you get paid fast.
          </p>
        </div>

        {/* ── Steps ── */}
        <section className="sell-section">
          <h2>How Selling Works</h2>
          <div className="sell-steps-grid">
            {steps.map((step, i) => (
              <div key={i} className="sell-step-card">
                <div className="sell-step-num">{i + 1}</div>
                <div className="sell-step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="sell-section">
          <h2>Why Sell With Us</h2>
          <div className="sell-benefits-grid">
            {benefits.map((b, i) => (
              <div key={i} className="sell-benefit-card">
                <div className="sell-benefit-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Listing Form ── */}
        <section className="sell-section">
          <div className="sell-form-wrapper">
            <div className="sell-form-header">
              <h2>Create Your Listing</h2>
              <p>Fill in the details below and our team will review your listing within 24 hours.</p>
            </div>

            {submitted ? (
              <div className="sell-success">
                <BadgeCheck size={56} />
                <h3>Listing Submitted!</h3>
                <p>
                  We'll review your listing and get back to you within 24 hours.
                  Keep an eye on your email for next steps.
                </p>
                <button className="sell-cta-btn" onClick={() => setSubmitted(false)}>
                  Submit Another
                </button>
              </div>
            ) : (
              <form className="sell-form" onSubmit={handleSubmit}>

                <div className="sell-upload-zone">
                  <Upload size={32} />
                  <p>Drag & drop photos or <span>browse</span></p>
                  <small>PNG, JPG up to 10 MB each · Min. 3 photos</small>
                </div>

                <div className="sell-form-row">
                  <div className="sell-field">
                    <label>Sneaker Name</label>
                    <input
                      type="text"
                      name="sneakerName"
                      value={form.sneakerName}
                      onChange={handleChange}
                      placeholder="e.g. Nike Air Jordan 1 Retro High OG"
                      required
                    />
                  </div>
                  <div className="sell-field">
                    <label>Brand</label>
                    <input
                      type="text"
                      name="brand"
                      value={form.brand}
                      onChange={handleChange}
                      placeholder="e.g. Nike"
                      required
                    />
                  </div>
                </div>

                <div className="sell-form-row">
                  <div className="sell-field">
                    <label>Size</label>
                    <div className="sell-select-wrap">
                      <select
                        name="size"
                        value={form.size}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select size</option>
                        {sizes.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="sell-chevron" />
                    </div>
                  </div>
                  <div className="sell-field">
                    <label>Condition</label>
                    <div className="sell-select-wrap">
                      <select
                        name="condition"
                        value={form.condition}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select condition</option>
                        {conditions.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="sell-chevron" />
                    </div>
                  </div>
                </div>

                <div className="sell-form-row">
                  <div className="sell-field">
                    <label>Asking Price (£)</label>
                    <input
                      type="number"
                      name="price"
                      value={form.price}
                      onChange={handleChange}
                      placeholder="e.g. 250"
                      min="1"
                      required
                    />
                  </div>
                </div>

                <div className="sell-field">
                  <label>Description <span className="sell-optional">(optional)</span></label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe the condition, any flaws, original box included, etc."
                  />
                </div>

                <div className="sell-fee-note">
                  <ShieldCheck size={16} />
                  <span>FlipKicks charges a <strong>9% seller fee</strong> only after your sneakers sell. No upfront costs.</span>
                </div>

                <button type="submit" className="sell-submit-btn">
                  Submit Listing
                </button>

              </form>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="sell-cta-section">
          <h2>Ready To Browse While You Wait?</h2>
          <button className="sell-cta-btn" onClick={() => navigate("/browse")}>
            Browse Sneakers
          </button>
        </section>

      </section>

  );
}

export default Sell;
