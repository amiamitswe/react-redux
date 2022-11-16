import productSaga from "./productSaga";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";

// // //deprecated content createStore
// import { createStore } from "redux";
// const store = createStore(rootReducer);

import { configureStore } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(productSaga);

export default store;
