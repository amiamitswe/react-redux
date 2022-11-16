import { actionType } from "./types";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      console.log(action);
      return [...data, action.data];

    case actionType.REMOVE_FROM_CART:
      console.log("REMOVE_FROM_CART called");

      const remainData = [...data].filter((item) => item.id !== action.data);

      console.log(remainData);
      return [...remainData];

    case actionType.EMPTY_CART:
      console.log("REMOVE_FROM_CART called");
      data = [];
      return [...data];

    default:
      return data;
  }
};
