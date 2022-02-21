// 사용자 정보 저장
import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    isLoading: false,
    tokken: "",
    userId: "",
    userMoney: 0,
    userItems: [],
  },
  reducers: {
    addlibrary(state, action) {
      const newBooks = action.payload.userItems;
      const existingItem = state.userItems.find(
        (item) => item.id === newBooks.id
      );
      if (!existingItem) {
        state.userItems = [...action.payload.userItems];
        state.userMoney = action.payload.userMoney;
      }
    },
    setIsLogin(state, action) {
      state.isLogin = action.payload.isLogin;
      state.userId = action.payload.userId;
      state.tokken = action.payload.tokken;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload.isLoading;
    },
    addUserMoney(state) {
      if (state.userMoney !== 50000) {
        state.userMoney += 5000;
      }
    },
  },
});

export const userActions = user.actions;

export default user.reducer;
