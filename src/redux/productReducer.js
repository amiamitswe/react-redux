import { actionType } from "./types";

export const productData = (data = [], action) => {
  switch (action.type) {
    case actionType.GET_PRODUCT_LIST:
      console.log(action);
      return [...data, action.data];

    default:
      return data;
  }
};
