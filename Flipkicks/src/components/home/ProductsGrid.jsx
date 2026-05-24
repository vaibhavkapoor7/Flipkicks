import { useEffect, useState } from "react";

import ProductCard from "../Home/Productcard/ProductCard";

import "../../components-css/home css/ProductsGrid.css";

function ProductsGrid() {

  const [products, setProducts] = useState([]);

  const [activeFilter, setActiveFilter] = useState("All");

  /* fetch */

  useEffect(() => {

    fetch("https://dummyjson.com/products/category/mens-shoes")

      .then((res) => res.json())

      .then((data) => {

        console.log(data.products);

        setProducts(data.products);

      })

      .catch((error) => {

        console.log(error);

      });

  }, []);

  /* filters */

  const filters = [
    "All",
    "Nike",
    "Puma",
    "Off White"
  ];

  /* filtered products */

  const filteredProducts =

    activeFilter === "All"

      ? products

      : products.filter(
          (product) => product.brand === activeFilter
        );

  return (

    <section className="products-grid">

      <div className="container">

        {/* top */}

        <div className="grid-top">

          <div>

            <span className="grid-tag">
              Explore Collection
            </span>

            <h2>
              Trending Sneakers
            </h2>

          </div>

        </div>

        {/* filters */}

        <div className="filter-buttons">

          {filters.map((filter, index) => (

            <button
              key={index}
              className={
                activeFilter === filter
                  ? "filter-btn active-filter"
                  : "filter-btn"
              }
              onClick={() => setActiveFilter(filter)}
            >

              {filter}

            </button>

          ))}

        </div>

        {/* products */}

        <div className="products-wrapper">

          {filteredProducts.slice(0, 10).map((product) => (

            <ProductCard
              key={product.id}

              image={product.thumbnail}

              title={product.title}

              brand={product.brand}

              price={product.price}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default ProductsGrid;