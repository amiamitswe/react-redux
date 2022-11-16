import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, emptyCart, removeFromCart } from "../redux/action";

const Main = () => {
  const dispatch = useDispatch();

  const product = {
    name: "Product name",
    type: "phone",
    price: 10000000,
    color: "silver",
  };
  return (
    <div>
      <button className="mr-2" onClick={() => dispatch(addToCart(product))}>
        Add to cart
      </button>

      <button className="mr-2" onClick={() => dispatch(removeFromCart(1))}>
        Remove form cart
      </button>

      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
    </div>
  );
};

export default Main;
