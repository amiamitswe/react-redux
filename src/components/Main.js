import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { getProductList } from "../redux/productAction";

const Main = () => {
  const dispatch = useDispatch();

  const productData = useSelector((state) => state.productData);

  console.log(productData);

  const product = {
    name: "Product name",
    type: "phone",
    price: 10000000,
    color: "silver",
  };
  return (
    <div>
      <div>
        <button className="mr-2" onClick={() => dispatch(addToCart(product))}>
          Add to cart
        </button>

        <button className="mr-2" onClick={() => dispatch(removeFromCart(1))}>
          Remove form cart
        </button>

        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>

      <div className="mt-2">
        <button onClick={() => dispatch(getProductList())}>
          Get All Products
        </button>
      </div>
    </div>
  );
};

export default Main;
