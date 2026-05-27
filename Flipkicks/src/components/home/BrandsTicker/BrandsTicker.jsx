import "./BrandsTicker.css";

function BrandsTicker() {

  const brands = [

    "NIKE",
    "ADIDAS",
    "JORDAN",
    "PUMA",
    "YEEZY",
    "NEW BALANCE",
    "CONVERSE",
    "ASICS",

  ];

  return (

    <section className="brands-ticker">

      <div className="ticker">

        <div className="ticker-track">

          {[...brands, ...brands].map((brand, index) => (

            <span key={index}>
              {brand}
            </span>

          ))}

        </div>

      </div>

    </section>
  );
}

export default BrandsTicker;