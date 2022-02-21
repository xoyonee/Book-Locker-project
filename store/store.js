import { configureStore } from "@reduxjs/toolkit";

import dataBaseReducers from "./dataBaseReducers";
import cartReducers from "./cartReducers";
import userReducers from "./userReducers";

const store = configureStore({
  reducer: { dataBase: dataBaseReducers, cart: cartReducers, user: userReducers },
});

export default store;
