import { useEffect, useState }
from "react";

import { useParams }
from "react-router-dom";

import {
  Heart,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw
} from "lucide-react";

import Navbar from
"../components/navbar/Navbar";

import Footer from
"../components/footer/Footer";

import "../pages-css/product.css";

function Product() {

  const { id } =
  useParams();

  const [product, setProduct] =
  useState(null);

  const [currentImage,
  setCurrentImage] =
  useState(0);

  const [selectedSize,
  setSelectedSize] =
  useState("8");

  /* sizes */

  const sizes = [

    "7",
    "7.5",
    "8",
    "8.5",

    "9",
    "9.5",
    "10",
    "10.5",

    "11",
    "11.5",
    "12"

  ];

  /* fetch */

  useEffect(() => {

    async function fetchProduct(){

      const response =
      await fetch(

        `https://dummyjson.com/products/${id}`

      );

      const data =
      await response.json();

      setProduct(data);
    }

    fetchProduct();

  }, [id]);

  /* auto carousel */

  useEffect(() => {

    if(!product) return;

    const interval =
    setInterval(() => {

      setCurrentImage((prev) =>

        prev ===
        product.images.length - 1

        ? 0

        : prev + 1

      );

    }, 5000);

    return () =>
      clearInterval(interval);

  }, [product]);

  /* loading */

  if(!product){

    return <h1>Loading...</h1>;
  }

  return (

    <>

      <Navbar />

      <section className="productpage">

        {/* LEFT */}

        <div className="product-left">

          {/* thumbnails */}
          <div className="product-image-section">
          <div className="product-thumbnails">

            {product.images.map((image, index) => (

              <button

                key={index}

                className={
                  currentImage === index
                  ? "active-thumb"
                  : ""
                }

                onClick={() =>
                  setCurrentImage(index)
                }

              >

                <img
                  src={image}
                  alt=""
                />

              </button>

            ))}

          </div>

          {/* main image */}

          <div className="product-main-image">

            <button className="wishlist-btn">

              <Heart size={20} />

            </button>

            <img

              src={
                product.images[currentImage]
              }

              alt={product.title}

            />

            {/* dots */}

            <div className="carousel-dots">

              {product.images.map((_, index) => (

                <button

                  key={index}

                  className={
                    currentImage === index
                    ? "active-dot"
                    : ""
                  }

                  onClick={() =>
                    setCurrentImage(index)
                  }

                />

              ))}

            </div>

          </div>
          </div>

          {/* features */}

          <div className="product-features">

            <div className="feature-item">

              <ShieldCheck size={22} />

              <div>

                <h4>
                  Authenticity Guaranteed
                </h4>

                <p>
                  14-Point Check
                </p>

              </div>

            </div>

            <div className="feature-item">

              <Truck size={22} />

              <div>

                <h4>
                  Free Shipping
                </h4>

                <p>
                  On all orders
                </p>

              </div>

            </div>

            <div className="feature-item">

              <RotateCcw size={22} />

              <div>

                <h4>
                  Easy Returns
                </h4>

                <p>
                  14-day return policy
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="product-right">

          <span className="product-brand">

            {product.brand}

          </span>

          <h1>

            {product.title}

          </h1>

          {/* rating */}

          <div className="product-rating">

            <div className="stars">

              {[1,2,3,4,5].map((star) => (

                <Star

                  key={star}

                  size={16}

                  fill="#facc15"

                  color="#facc15"

                />

              ))}

            </div>

            <p>

              {product.rating}

            </p>

          </div>

          {/* price */}

          <div className="product-price">

            ${product.price}

          </div>

          {/* description */}

          <p className="product-description">

            {product.description}

          </p>

          {/* sizes */}

          <div className="sizes-section">

            <div className="sizes-top">

              <h3>
                Select Size
              </h3>

              <button>
                Size Guide
              </button>

            </div>

            <div className="sizes-grid">

              {sizes.map((size) => (

                <button

                  key={size}

                  className={
                    selectedSize === size
                    ? "active-size"
                    : ""
                  }

                  onClick={() =>
                    setSelectedSize(size)
                  }

                >

                  {size}

                </button>

              ))}

            </div>

          </div>

          {/* buttons */}

          <div className="product-actions">

            <button className="buy-btn">

              Buy Now

            </button>

            <button className="cart-btn">

              Add To Cart

            </button>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default Product;