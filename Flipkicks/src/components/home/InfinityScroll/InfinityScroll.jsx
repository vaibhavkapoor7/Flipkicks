import "./InfinityScroll.css";

function InfinityScroll() {

  const items = [

    "AUTHENTIC SNEAKERS VERIFIED BY EXPERTS",

    "LIMITED DROPS EVERY WEEK",

    "WORLDWIDE FAST SHIPPING",

    "BUY • SELL • FLIP • LEGIT",

    "PREMIUM SNEAKER MARKETPLACE",

  ];

  return (

    <div className="infinity-scroll">

      <div className="infinity-track">

        {[...items, ...items, ...items].map((item, index) => (

          <span key={index}>
            {item}
          </span>

        ))}

      </div>

    </div>
  );
}

export default InfinityScroll;