import { Heart, ShoppingBag, Star } from "lucide-react";

import "./ProductCard.css";

function ProductCard({ image, title, brand, price }) {

  return (

    <div className="product-card">

      {/* top */}

      <div className="product-top">

        <button className="wishlist-btn">

          <Heart size={18} />

        </button>

        <img
          src={image}
          alt={title}

          onError={(e) => {

            e.target.src =
              "https://via.placeholder.com/300x200";

          }}
        />

      </div>

      {/* info */}

      <div className="product-info">
        <div className="product-name">
        <span className="product-brand">
          {brand}
        </span>

        <h3>
          {title}
        </h3>
        </div>

        {/* rating */}

        <div className="product-rating">

          <Star
            size={16}
            fill="currentColor"
          />

          <span>4.9</span>

        </div>

        {/* bottom */}

        <div className="product-bottom">

          <h2>
            ${price}
          </h2>

          <button className="cart-btn">

            <ShoppingBag size={18} />

          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;