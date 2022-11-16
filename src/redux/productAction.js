import { actionType } from "./types";

export const getProductList = () => {
  return {
    type: actionType.GET_PRODUCT_LIST,
  };
};

// export const setProductList = (data) => {
//   console.log(data);
//   return {
//     type: actionType.SET_PRODUCT_LIST,
//     data,
//   };
// };
