import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/action";
import { getProductList, productSearch } from "../redux/productAction";

const Main = () => {
  const dispatch = useDispatch();

  const productData = useSelector((state) => state.productData);

  console.log(productData);

  // const product = {
  //   name: "Product name",
  //   type: "phone",
  //   price: 10000000,
  //   color: "silver",
  // };

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => dispatch(productSearch(e.target.value))}
        />
      </div>
      <div className="mt-2">
        {productData?.map((item) => (
          <div className="item" key={item.id}>
            <p>{item.title}</p>
            <p>{item.body}</p>

            <div>
              <button
                className="mr-2 hover"
                onClick={() => dispatch(addToCart(item))}
              >
                Add to cart
              </button>
              <button
                className="hover"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove form cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
