import { useEffect, useState }
from "react";

import ProductCard
from "../Productcard/ProductCard";

import "./ProductsGrid.css";

function ProductsGrid() {

  const [products, setProducts] =
  useState([]);

  const [activeFilter,
  setActiveFilter] =
  useState("All");

  /* fetch products */

  useEffect(() => {

    const urls = [

      "https://dummyjson.com/products/category/mens-shoes",

      "https://dummyjson.com/products/category/womens-shoes"

    ];

    Promise.all(

      urls.map(url =>
        fetch(url)
          .then(res => res.json())
      )

    )

    .then((data) => {

      const allProducts =
      data.flatMap(
        item => item.products
      );

      setProducts(allProducts);

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

  /* filtered */

  const filteredProducts =

    activeFilter === "All"

      ? products

      : products.filter(

          product =>

            product.brand ===
            activeFilter

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

          {filters.map((filter) => (

            <button

              key={filter}

              className={

                activeFilter === filter

                ? "filter-btn active-filter"

                : "filter-btn"

              }

              onClick={() =>
                setActiveFilter(filter)
              }

            >

              {filter}

            </button>

          ))}

        </div>

        {/* products */}

        <div className="products-wrapper">

          {filteredProducts

            .slice(0, 20)

            .map((product) => (

              <ProductCard

                key={product.id}

                id={product.id}

                image={product.thumbnail}

                title={product.title}

                brand={product.brand}

                price={product.price}

                rating={product.rating}

                variant="home"

              />

            ))}

        </div>

      </div>

    </section>

  );
}

export default ProductsGrid;