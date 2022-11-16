import { takeEvery, put } from "redux-saga/effects";
import { actionType } from "./types";

function* getProducts() {
  const product = yield fetch(
    "https://jsonplaceholder.typicode.com/comments?postId=1"
  );
  const data = yield product.json();
  // console.log(data);
  yield put({ type: actionType.SET_PRODUCT_LIST, data });
}

function* productSaga() {
  yield takeEvery(actionType.GET_PRODUCT_LIST, getProducts);
}

export default productSaga;
