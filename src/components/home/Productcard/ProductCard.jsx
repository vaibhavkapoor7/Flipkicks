import { Heart, ShoppingBag, Star }
from "lucide-react";

import { Link }
from "react-router-dom";

import { useCurrency } from "../../../context/CurrencyContext";
import { useWishlist } from "../../../context/WishlistContext";

import "./ProductCard.css";

function ProductCard({

  id,

  image,

  title,

  brand,

  price,

  rating = 4.9,

  variant = "home"

}) {

  const { format } = useCurrency();
  const { isWishlisted, toggleWishlist } = useWishlist();

  const wishlisted = isWishlisted(id);

  return (

    <Link

      to={`/product/${id}`}

      className={`product-card ${variant}`}

    >

      {/* image */}

      <div className="card-top">

        <button

          className={`card-wishlist ${wishlisted ? "card-wishlist-active" : ""}`}

          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}

          onClick={(e) => {

            e.preventDefault();

            toggleWishlist(id);

          }}

        >

          <Heart size={18} fill={wishlisted ? "currentColor" : "none"} />

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

      {/* content */}

      <div className="card-content">

        <span className="card-brand">

          {brand}

        </span>

        <h3>

          {title}

        </h3>

        <div className="card-rating">

          <Star

            size={15}

            fill="#facc15"

            color="#facc15"

          />

          <span>

            {rating}

          </span>

        </div>

        <div className="card-bottom">

          <h2>

            {format(price)}

          </h2>

          <button

            className="card-cart"

            onClick={(e) => {

              e.preventDefault();

            }}

          >

            <ShoppingBag size={18} />

          </button>

        </div>

      </div>

    </Link>

  );
}

export default ProductCard;