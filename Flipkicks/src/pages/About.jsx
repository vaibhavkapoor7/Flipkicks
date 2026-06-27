import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  Users,
  TrendingUp,
  Heart,
  Star,
  BadgeCheck,
  Globe,
  Zap,
} from "lucide-react";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

import "../pages-css/About.css";

const stats = [
  { value: "500K+", label: "Sneakers Sold" },
  { value: "100K+", label: "Verified Listings" },
  { value: "50K+",  label: "Happy Customers" },
  { value: "99.8%", label: "Authenticity Rate" },
];

const values = [
  {
    icon: <ShieldCheck />,
    title: "Authenticity First",
    text: "Every sneaker is inspected by our expert team before it ever reaches a buyer. No fakes. No exceptions.",
  },
  {
    icon: <Users />,
    title: "Community Driven",
    text: "Built by sneakerheads, for sneakerheads. Every feature is shaped by the people who love kicks the most.",
  },
  {
    icon: <TrendingUp />,
    title: "Fair Market",
    text: "Real-time pricing data ensures sellers earn what their pair is worth and buyers never overpay.",
  },
  {
    icon: <Heart />,
    title: "Passion For Kicks",
    text: "We don't just run a marketplace — we live the culture. Sneakers are at the heart of everything we do.",
  },
];

const team = [
  {
    name: "Vaibhav Kapoor",
    role: "Founder",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=VaibhavKapoor&backgroundColor=dbeafe&skinColor=f2d3b1&hair=short01&hairColor=2c1503&eyes=variant07&mouth=variant26",
    bio: "Vaibhav started FlipKicks after getting burned by a fake pair online. His vision turned frustration into the most trusted sneaker marketplace in the UK.",
  },
  {
    name: "Priyal Kapoor",
    role: "Co-Founder",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=PriyalKapoor&backgroundColor=fce7f3&skinColor=f2d3b1&hair=long17&hairColor=0e0e0e&eyes=variant12&mouth=variant29",
    bio: "Priyal drives product strategy and brand at FlipKicks. She's the reason the platform feels as premium as the kicks it sells.",
  },
  {
    name: "Vansh",
    role: "Head of Authentication",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=VanshAuth&backgroundColor=d1fae5&skinColor=ae5d29&hair=short04&hairColor=0e0e0e&eyes=variant04&mouth=variant30",
    bio: "Vansh has examined over 200,000 pairs and hasn't missed a fake yet. He built our 30-point verification checklist from scratch.",
  },
];

const milestones = [
  { year: "2020", event: "FlipKicks founded in a small London flat with 50 listings." },
  { year: "2021", event: "Reached 10,000 verified sales and launched authentication centres." },
  { year: "2022", event: "Expanded to 12 countries and hit 100K registered users." },
  { year: "2024", event: "Surpassed 500K sneakers sold with a 99.8% authenticity rate." },
];

function About() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <section className="about-page">

        {/* ── Hero ── */}
        <div className="about-hero">
          <span className="about-badge">Our Story</span>
          <h1>The Sneaker Marketplace<br />Built On <span className="about-accent">Trust</span></h1>
          <p>
            FlipKicks was born from a simple frustration — buying and selling
            sneakers online was risky, slow, and full of fakes. We built the
            platform we always wished existed.
          </p>
        </div>

        {/* ── Mission ── */}
        <section className="about-mission">
          <div className="about-mission-text">
            <span className="about-label">Our Mission</span>
            <h2>Authenticate Every Pair.<br />Protect Every Buyer.</h2>
            <p>
              We exist to make the secondary sneaker market trustworthy for everyone.
              That means rigorous authentication, transparent pricing, and a platform
              that puts the community first — whether you're copping your first grail
              or flipping your tenth pair this month.
            </p>
            <p>
              Every sneaker sold on FlipKicks passes through our hands before it
              reaches yours. Our authentication team inspects materials, stitching,
              serial numbers, and packaging using a 30-point checklist developed
              over years of expertise.
            </p>
          </div>

          <div className="about-stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="about-stat-card">
                <h3>{s.value}</h3>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Values ── */}
        <section className="about-section">
          <div className="about-section-header">
            <span className="about-label">What We Stand For</span>
            <h2>Our Values</h2>
          </div>
          <div className="about-values-grid">
            {values.map((v, i) => (
              <div key={i} className="about-value-card">
                <div className="about-value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="about-section">
          <div className="about-section-header">
            <span className="about-label">Where We've Been</span>
            <h2>Our Journey</h2>
          </div>
          <div className="about-timeline">
            {milestones.map((m, i) => (
              <div key={i} className="about-timeline-item">
                <div className="about-timeline-year">{m.year}</div>
                <div className="about-timeline-dot" />
                <div className="about-timeline-event">{m.event}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Team ── */}
        <section className="about-section">
          <div className="about-section-header">
            <span className="about-label">The People Behind It</span>
            <h2>Meet The Team</h2>
          </div>
          <div className="about-team-grid">
            {team.map((member, i) => (
              <div key={i} className="about-team-card">
                <img src={member.image} alt={member.name} className="about-team-avatar" />
                <h3>{member.name}</h3>
                <span className="about-team-role">{member.role}</span>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Trust Banner ── */}
        <section className="about-trust">
          <div className="about-trust-items">
            <div className="about-trust-item">
              <BadgeCheck size={28} />
              <span>Authentication Guaranteed</span>
            </div>
            <div className="about-trust-item">
              <Globe size={28} />
              <span>Shipping Worldwide</span>
            </div>
            <div className="about-trust-item">
              <Zap size={28} />
              <span>Instant Payouts</span>
            </div>
            <div className="about-trust-item">
              <Star size={28} />
              <span>4.9 / 5 Average Rating</span>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="about-cta">
          <h2>Ready To Join The Community?</h2>
          <div className="about-cta-buttons">
            <button className="about-cta-primary" onClick={() => navigate("/browse")}>
              Browse Sneakers
            </button>
            <button className="about-cta-secondary" onClick={() => navigate("/sell")}>
              Start Selling
            </button>
          </div>
        </section>

      </section>

      <Footer />
    </>
  );
}

export default About;
