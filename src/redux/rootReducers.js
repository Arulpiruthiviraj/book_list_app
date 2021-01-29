import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import bookReducer from "./book/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["book"],
};

const rootReducer = combineReducers({
  book: bookReducer,
});

export default persistReducer(persistConfig, rootReducer);
