import { takeEvery, put } from "redux-saga/effects";
import { actionType } from "./types";

function* getProducts() {
  const product = yield fetch("https://jsonplaceholder.typicode.com/posts");
  const data = yield product.json();
  // console.log(data);
  yield put({ type: actionType.SET_PRODUCT_LIST, data });
}

function* productSearch(query) {
  const result = yield fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${query.query}`
  );
  const data = yield result.json();
  // console.log(data);
  yield put({ type: actionType.SET_PRODUCT_LIST, data });
}

function* productSaga() {
  yield takeEvery(actionType.GET_PRODUCT_LIST, getProducts);
  yield takeEvery(actionType.SEARCH_PRODUCT, productSearch);
}

export default productSaga;
