import { actionType } from "./types";

export const addToCart = (product) => {
  console.log(product);
  return {
    type: actionType.ADD_TO_CART,
    data: product,
  };
};

export const removeFromCart = (id) => {
  console.log("ok removed");
  return {
    type: actionType.REMOVE_FROM_CART,
    date: id,
  };
};
export const emptyCart = () => {
  console.log("ok Empty cart done");
  return {
    type: actionType.EMPTY_CART,
  };
};
