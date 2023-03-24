import React from "react";
import CartList from "./CartList";
import { useDispatch } from "react-redux";
import { removeAllItems } from "../redux/store";
import "../styles/cart.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createOrder } from "../redux/store";

const Cart = () => {
  const { cart, user } = useSelector((state) => state);

  const dispatch = useDispatch();

  const removeAllItemsHandler = () => {
    dispatch(removeAllItems());
  };

  const checkoutHandler = (items, buyer) => {
    console.log(items);
    dispatch(createOrder({ items, buyer }));
  };

  let content = (
    <>
      <CartList />
      <button
        className="cart-remove-all-btn"
        onClick={() => removeAllItemsHandler()}
      >
        Remove All
      </button>
      <p className="cart-total-cost">Total cost - ${cart.totalCost}</p>
      <Link
        to="/checkout"
        className="cart-checkout-btn-link"
        onClick={() => checkoutHandler(cart.items, user.userInfo)}
      >
        <button className="cart-checkout-btn">Checkout</button>
      </Link>
    </>
  );
  return (
    <div className="cart-block">
      {cart.items.length > 0 ? (
        content
      ) : (
        <h2 className="cart_no-items-found">No items in the cart</h2>
      )}
    </div>
  );
};

export default Cart;
