// 검색 아이템 가져오기
import app from "../store/firebaseConfig";
import {
  getFirestore,
  collection,
  where,
  query,
  getDocs,
} from "firebase/firestore";
import { dataBaseActions } from "./dataBaseReducers";
const db = getFirestore(app);

export const searchDatabase = (word) => {
  return async (dispatch) => {
    const q = query(
      collection(db, "books"),
      where("keyword", "array-contains", `${word}`)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const list = doc.data();
      dispatch(
        dataBaseActions.searchItems({
          search: list,
          searchIsLoading: false,
        })
      );
    });
  };
};
