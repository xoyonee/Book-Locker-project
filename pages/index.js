// 홈페이지, 쇼핑페이지 
// 정보 불러와서 저장
import app from "../store/firebaseConfig";
import { getFirestore, getDocs, collection } from "firebase/firestore";
const db = getFirestore(app);

import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataBaseActions } from "../store/dataBaseReducers";
import Books from "../Component/books/Books";
import { useRouter } from "next/router";

let chk = true;
const HomePage = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    if (props.list.length === 0) {
      router.push("/404");
    }
    if (chk) {
      dispatch(
        dataBaseActions.replace({
          items: props.list,
        })
      );
      dispatch(
        dataBaseActions.reverseReplace({
          reverseItems: props.reverse,
        })
      );
      chk = false;
    }
  }, []);

  return (
    <Fragment>
      <Books onTitle="베스트 셀러" />
      <Books onTitle="신간" />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  let list = [];
  const querySnapshot = await getDocs(collection(db, "books"));
  querySnapshot.forEach((doc) => {
    list.push({
      id: doc.data().id,
      url: doc.data().url,
      keyword: doc.data().keyword,
      name: doc.data().name,
      author: doc.data().author,
      title: doc.data().title,
      desc: doc.data().desc || null,
      info: doc.data().info || null,
      publisher: doc.data().publisher,
      day: doc.data().day,
      page: doc.data().page,
      price: doc.data().price,
    });
  });
  return {
    props: { list: list || [], reverse: list || [] },
  };
};

export default HomePage;
