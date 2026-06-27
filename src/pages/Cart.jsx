import { useNavigate } from "react-router-dom";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ChevronRight,
  Tag,
  ShieldCheck,
  Truck,
  RotateCcw,
  ArrowLeft,
} from "lucide-react";

import { useCart } from "../context/CartContext";

import "../pages-css/Cart.css";

const SHIPPING = 9.99;
const TAX_RATE = 0.08;

function Cart() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, subtotal, totalItems, clearCart } = useCart();

  const shipping  = cartItems.length > 0 ? SHIPPING : 0;
  const tax       = subtotal * TAX_RATE;
  const total     = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <section className="cart-page">
        <div className="cart-empty">
          <div className="cart-empty-icon">
            <ShoppingBag size={52} />
          </div>
          <h2>Your Cart Is Empty</h2>
          <p>Looks like you haven't added any sneakers yet. Start browsing to find your next pair.</p>
          <button className="cart-browse-btn" onClick={() => navigate("/browse")}>
            Browse Sneakers <ChevronRight size={18} />
          </button>
        </div>
      </section>
    );
  }

  return (

      <section className="cart-page">

        {/* header */}
        <div className="cart-header">
          <button className="cart-back-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={16} /> Continue Shopping
          </button>
          <div className="cart-header-right">
            <h1>Your Cart <span className="cart-count-pill">{totalItems}</span></h1>
            <button className="cart-clear-btn" onClick={clearCart}>Clear All</button>
          </div>
        </div>

        <div className="cart-body">

          {/* items */}
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={`${item.id}-${item.size}`} className="cart-item">

                <div className="cart-item-img">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="cart-item-info">
                  <span className="cart-item-brand">{item.brand}</span>
                  <h3>{item.title}</h3>
                  <span className="cart-item-size">UK {item.size}</span>
                </div>

                <div className="cart-item-qty">
                  <button
                    className="qty-btn"
                    onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                  >
                    <Minus size={14} />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <div className="cart-item-price">
                  <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  <span className="cart-item-unit">${item.price.toFixed(2)} each</span>
                </div>

                <button
                  className="cart-item-remove"
                  onClick={() => removeFromCart(item.id, item.size)}
                  aria-label="Remove item"
                >
                  <Trash2 size={16} />
                </button>

              </div>
            ))}

            {/* trust strip */}
            <div className="cart-trust">
              <div className="cart-trust-item">
                <ShieldCheck size={18} /> Authenticity Guaranteed
              </div>
              <div className="cart-trust-item">
                <Truck size={18} /> Free Returns
              </div>
              <div className="cart-trust-item">
                <RotateCcw size={18} /> 14-Day Return Policy
              </div>
            </div>
          </div>

          {/* summary */}
          <div className="cart-summary">

            <h2>Order Summary</h2>

            {/* promo */}
            <div className="cart-promo">
              <Tag size={16} />
              <input type="text" placeholder="Promo or gift code" />
              <button>Apply</button>
            </div>

            <div className="cart-summary-rows">
              <div className="summary-row">
                <span>Subtotal ({totalItems} {totalItems === 1 ? "item" : "items"})</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>

            <button className="cart-checkout-btn">
              Proceed to Checkout <ChevronRight size={18} />
            </button>

            <div className="cart-summary-note">
              <ShieldCheck size={14} />
              <span>Secure checkout · SSL encrypted</span>
            </div>

          </div>

        </div>

      </section>

  );
}

export default Cart;
