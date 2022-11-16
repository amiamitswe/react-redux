import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const cartData = useSelector((state) => state.cartData);
  console.log(cartData);
  return <div className="mt-2">Total count no : {cartData.length}</div>;
};

export default Header;
