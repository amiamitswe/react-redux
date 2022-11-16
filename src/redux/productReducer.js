import { actionType } from "./types";

export const productData = (data = [], action) => {
  switch (action.type) {
    // case actionType.GET_PRODUCT_LIST:
    //   console.log(action);
    //   return [action.data];

    case actionType.SET_PRODUCT_LIST:
      // console.log(action);
      return [...action.data];

    default:
      return data;
  }
};
