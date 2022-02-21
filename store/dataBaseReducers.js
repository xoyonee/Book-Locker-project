// 기본 정보 저장
import { createSlice } from "@reduxjs/toolkit";

const dataBase = createSlice({
  name: "dataBase",
  initialState: {
    items: [],
    search: [],
    url: [],
    comment: [],
    reverseItems: [],
    product: [],
  },
  reducers: {
    replace(state, action) {
      const data = [...action.payload.items];
      state.items = data.sort(() => {
        return Math.random() - Math.random();
      });
    },
    reverseReplace(state, action) {
      const data = [...action.payload.reverseItems];
      state.reverseItems = data.sort(() => {
        return Math.random() - Math.random();
      });
    },
    productItem(state, action) {
      state.product = action.payload.product;
    },
    searchItems(state, action) {
      const list = action.payload.search;
      state.search = list;
    },
    setCommentReplace(state, action) {
      state.comment = action.payload.comment;
    },
  },
});

export const dataBaseActions = dataBase.actions;

export default dataBase.reducer;
