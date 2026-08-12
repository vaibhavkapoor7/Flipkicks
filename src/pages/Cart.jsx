import { useState } from "react";
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
  AlertTriangle,
  CheckCircle2,
  X,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import { useCurrency } from "../context/CurrencyContext";

import "../pages-css/Cart.css";

const SHIPPING = 9.99;
const TAX_RATE = 0.08;

function Cart() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, subtotal, totalItems, clearCart } = useCart();
  const { format } = useCurrency();

  const [showConfirm, setShowConfirm] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const shipping  = cartItems.length > 0 ? SHIPPING : 0;
  const tax       = subtotal * TAX_RATE;
  const total     = subtotal + shipping + tax;

  function handleConfirmPurchase() {
    setOrderNumber(`FK-${Math.floor(100000 + Math.random() * 900000)}`);
    clearCart();
    setShowConfirm(false);
    setOrderComplete(true);
  }

  if (orderComplete) {
    return (
      <section className="cart-page">
        <div className="order-success">
          <div className="order-success-icon">
            <CheckCircle2 size={48} />
          </div>
          <h2>Thank You For Your Purchase!</h2>
          <p>
            Your order <strong>#{orderNumber}</strong> has been placed. We've sent a
            confirmation to your email, and your authenticated sneakers will be on
            their way soon.
          </p>
          <div className="order-success-actions">
            <button className="cart-browse-btn" onClick={() => navigate("/browse")}>
              Continue Shopping <ChevronRight size={18} />
            </button>
            <button className="order-success-secondary" onClick={() => navigate("/account")}>
              View My Orders
            </button>
          </div>
        </div>
      </section>
    );
  }

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
                  <strong>{format(item.price * item.quantity, { decimals: 2 })}</strong>
                  <span className="cart-item-unit">{format(item.price, { decimals: 2 })} each</span>
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
                <span>{format(subtotal, { decimals: 2 })}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>{format(shipping, { decimals: 2 })}</span>
              </div>
              <div className="summary-row">
                <span>Tax (8%)</span>
                <span>{format(tax, { decimals: 2 })}</span>
              </div>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <strong>{format(total, { decimals: 2 })}</strong>
            </div>

            <button className="cart-checkout-btn" onClick={() => setShowConfirm(true)}>
              Proceed to Checkout <ChevronRight size={18} />
            </button>

            <div className="cart-summary-note">
              <ShieldCheck size={14} />
              <span>Secure checkout · SSL encrypted</span>
            </div>

          </div>

        </div>

        {showConfirm && (
          <div className="confirm-overlay" onClick={() => setShowConfirm(false)}>
            <div className="confirm-modal" onClick={(e) => e.stopPropagation()}>
              <button
                className="confirm-close"
                onClick={() => setShowConfirm(false)}
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="confirm-icon">
                <AlertTriangle size={26} />
              </div>

              <h2>Confirm Your Order</h2>
              <p>
                Are you sure you want to place this order for{" "}
                <strong>{totalItems} {totalItems === 1 ? "item" : "items"}</strong>{" "}
                totalling <strong>{format(total, { decimals: 2 })}</strong>? This
                action can't be undone.
              </p>

              <div className="confirm-actions">
                <button className="confirm-cancel" onClick={() => setShowConfirm(false)}>
                  Cancel
                </button>
                <button className="confirm-proceed" onClick={handleConfirmPurchase}>
                  Yes, Place Order
                </button>
              </div>
            </div>
          </div>
        )}

      </section>

  );
}

export default Cart;
