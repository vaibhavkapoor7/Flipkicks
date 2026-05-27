import BrowseProductCard from
"../BrowseProductCard/BrowseProductCard";

import "./BrowseProductsGrid.css";

function BrowseProductGrid({

  products = [],

  view

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

        <BrowseProductCard

          key={product.id}
          id={product.id}

          image={product.thumbnail}

          title={product.title}

          brand={product.brand}

          price={product.price}

          rating={product.rating}

        />

      ))}

    </section>
  );
}

export default BrowseProductGrid;