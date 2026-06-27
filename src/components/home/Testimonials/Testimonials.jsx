import {
  Star
} from "lucide-react";

import "./Testimonials.css";

function Testimonials() {

  const reviews = [

    {
      name: "Alex Carter",
      username: "@alexkicks",
      image:
        "https://i.pravatar.cc/150?img=12",

      review:
        "Best sneaker marketplace I’ve used. Fast shipping and authentic pairs every time.",
    },

    {
      name: "Jordan Lee",
      username: "@jordanheat",
      image:
        "https://i.pravatar.cc/150?img=32",

      review:
        "The UI feels premium and the checkout process was super smooth. Highly recommended.",
    },

    {
      name: "Mike Ross",
      username: "@mikekicks",
      image:
        "https://i.pravatar.cc/150?img=15",

      review:
        "Bought my Travis Scotts here and the verification process was insanely fast.",
    },

  ];

  return (

    <section className="testimonials">

      {/* heading */}

      <div className="testimonial-header">

        <span>
          TESTIMONIALS
        </span>

        <h2>
          Trusted By
          <br />
          Sneakerheads
        </h2>

      </div>

      {/* cards */}

      <div className="testimonial-grid">

        {reviews.map((review, index) => (

          <div className="testimonial-card" key={index}>

            {/* top */}

            <div className="testimonial-top">

              <div className="user">

                <img
                  src={review.image}
                  alt={review.name}
                />

                <div>

                  <h4>
                    {review.name}
                  </h4>

                  <p>
                    {review.username}
                  </p>

                </div>

              </div>

              {/* stars */}

              <div className="stars">

                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />

              </div>

            </div>

            {/* review */}

            <p className="review-text">
              {review.review}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Testimonials;