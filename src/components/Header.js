import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const cartData = useSelector((state) => state.cartData);
  console.log(cartData);
  return <div>Total count no : {cartData.length}</div>;
};

export default Header;
