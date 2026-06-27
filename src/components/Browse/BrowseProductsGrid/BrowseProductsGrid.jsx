import ProductCard
from "../../home/Productcard/ProductCard";

import "./BrowseProductsGrid.css";

function BrowseProductsGrid({

  products = [],

  view = "grid"

}) {

  return (

    <section

      className={

        view === "grid"

        ? "browse-products-grid"

        : "browse-products-list"

      }

    >

      {products.map((product) => (

        <ProductCard

          key={product.id}

          id={product.id}

          image={product.thumbnail}

          title={product.title}

          brand={product.brand}

          price={product.price}

          rating={product.rating}

          variant="browse"

        />

      ))}

    </section>

  );
}

export default BrowseProductsGrid;