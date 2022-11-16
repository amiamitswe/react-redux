import { actionType } from "./types";

export const getProductList = () => {
  const product = "this is products";
  console.log(product);
  return {
    type: actionType.GET_PRODUCT_LIST,
    data: product,
  };
};
