import {
  Heart,
  Star
} from "lucide-react";
import { Link }
from "react-router-dom";

import "./BrowseProductCard.css";

function BrowseProductCard({
    id,
  image,
  title,
  brand,
  price,
  rating
}) {

  return (

    <Link

  to={`/product/${id}`}

  className="browse-product-card"

>

      {/* wishlist */}

      <button className="wishlist-btn">

        <Heart size={18} />

      </button>

      {/* image */}

      <div className="browse-product-image">

        <img
          src={image}
          alt={title}
        />

      </div>

      {/* content */}

      <div className="browse-product-content">

        <span>
          {brand}
        </span>

        <h3>
          {title}
        </h3>

        <div className="browse-product-bottom">

          <h4>
            ${price}
          </h4>

          <div className="rating">

            <Star
              size={14}
              fill="#facc15"
            />

            <p>
              {rating}
            </p>

          </div>

        </div>

      </div>

    </Link>
  );
}

export default BrowseProductCard;