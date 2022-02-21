// 아이템 정보 가져와서 저장
import app from "../../store/firebaseConfig";
import { getFirestore, getDocs, collection } from "firebase/firestore";
const db = getFirestore(app);

import { useDispatch } from "react-redux";
import { dataBaseActions } from "../../store/dataBaseReducers";

import { Fragment, useEffect } from "react";
import Search from "../../Component/search/Search";
import { useRouter } from "next/router";

let chk = true;
const SearchPage = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    if (props.list.length === 0) {
      router.push("/404");
      console.log('이동')
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
      <Search />
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


export default SearchPage;
