
const BrandsTicker = ({ brands = [] }) => {
  return (
    <section className="brands-ticker">
      <div className="brands-ticker__scroll">
        {brands.map((brand) => (
          <span key={brand} className="brands-ticker__brand">
            {brand}
          </span>
        ))}
      </div>
    </section>
  )
}

export default BrandsTicker
