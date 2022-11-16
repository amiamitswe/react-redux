import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart, removeFromCart } from "../redux/action";

const Header = () => {
  const cartData = useSelector((state) => state.cartData);
  console.log(cartData);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  return (
    <div className="mt-2 cart">
      Total count no :{" "}
      <button className="hover" onClick={() => setOpen((pre) => !pre)}>
        {cartData.length}
      </button>
      {open && (
        <div className="modal">
          <p>Total count no : {cartData.length}</p>
          <button
            className="hover"
            onClick={() => {
              dispatch(emptyCart());
              setOpen(false);
            }}
          >
            Empty Cart
          </button>

          <div className="mt-2">
            {cartData?.map((item) => (
              <div className="item" key={item.id}>
                <p>{item.title}</p>
                <p>{item.body}</p>

                <div>
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
      )}
    </div>
  );
};

export default Header;
