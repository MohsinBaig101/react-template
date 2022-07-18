import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

// import * as auth from "../app/modules/Auth/_redux/authRedux";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};

// const shipmentsPersistConfig = {
//   key: "shipments",
//   storage: storage,
//   whitelist: ["shipmentNumber"],
// };

const reducers = combineReducers({
  //   auth: auth.reducer,
  //   shipments: persistReducer(shipmentsPersistConfig, shipmentsSlice.reducer),
  //   users: usersSlice.reducer,
});

export const rootReducer = persistReducer(rootPersistConfig, reducers);

export function* rootSaga() {
  //   yield all([auth.saga()]);
  yield all([]);
}
