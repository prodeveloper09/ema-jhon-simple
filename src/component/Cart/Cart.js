import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;

  const total = cart.reduce((sum, prd) => sum + (Number(prd.price) || 0), 0);

  let shipping = 0;
  if (total > 500) {
    shipping = 0;
  } else if (total > 25) {
    shipping = 5.99;
  } else if (total > 0) {
    shipping = 12.99;
  }

  const tax = total * 0.1;

  // ✅ SAFE FORMAT FUNCTION
  const formatNumber = (num) => {
    return (Number(num) || 0).toFixed(2);
  };

  const grandTotal = (total + shipping + tax).toFixed(2);

  return (
    <div className="order-summary">
      <h4>Order Summary</h4>

      <p>Items Ordered: {cart.length}</p>

      <p>Product Price: ${formatNumber(total)}</p>

      <p>
        <small>Shipping Cost: ${formatNumber(shipping)}</small>
      </p>

      <p>
        <small>Tax + VAT: ${formatNumber(tax)}</small>
      </p>

      <p>
        <b>Total Price: ${grandTotal}</b>
      </p>

      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default Cart;
