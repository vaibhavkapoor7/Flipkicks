import "./StatsBar.css";

function StatsBar() {

  return (

    <section className="stats-bar">

      <div className="stats-overlay"></div>

      {/* LEFT CONTENT */}

      <div className="stats-content">

        <div className="stats-left">

          <h2>
            Built for Sneakerheads.
            <br />
            Backed by Trust.
          </h2>

          <button>
            Learn More About Us
          </button>

        </div>

        {/* RIGHT STATS */}

        <div className="stats-right">

          <div className="stat-item">
            <h3>500K+</h3>
            <p>Sneakers Sold</p>
          </div>

          <div className="stat-item">
            <h3>100K+</h3>
            <p>Verified Listings</p>
          </div>

          <div className="stat-item">
            <h3>50K+</h3>
            <p>Happy Customers</p>
          </div>

          <div className="stat-item">
            <h3>99.8%</h3>
            <p>Authenticity Rate</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default StatsBar;