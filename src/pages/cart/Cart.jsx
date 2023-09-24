import React, { useContext } from "react";
import { PRODUCTS } from "../../Products";
import { ShopContext } from "../../context/ShopContextProvider";
import CartItem from "./cartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button
            onClick={() => navigate("/react-project-simple-shopping-cart")}
          >
            Continue Shopping
          </button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Your Cart Is Empty</h1>
      )}
    </div>
  );
}

export default Cart;
