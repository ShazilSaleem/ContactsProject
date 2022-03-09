import { createStore, applyMiddleware } from "redux";
import ContactReducers from "./redux/reducers/ContactReducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "main-root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, ContactReducers);

const store = createStore(persistedReducer, applyMiddleware());
const persistor = persistStore(store);

export { persistor };
export default store;
