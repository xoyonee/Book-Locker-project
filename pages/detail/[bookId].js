// 댓글, 아이템 정보 저장
import { Fragment } from "react";
import Product from "../../Component/detail/Product";

import app from "../../store/firebaseConfig";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const db = getFirestore(app);

import { useDispatch } from "react-redux";
import { dataBaseActions } from "../../store/dataBaseReducers";// dataBaseReducers.js

const DetailPage = (props) => {
  const dispatch = useDispatch();
  dispatch(
    dataBaseActions.setCommentReplace({ //댓글 가져오기
      comment: props.comment,
    })
  );
  dispatch(
    dataBaseActions.productItem({ //아이템 정보 가져오기
      product: props.item,
    })
  );

  return (
    <Fragment>
      <Product />
    </Fragment>
  );
};

export const getServerSideProps = async (context) => {
  const id = context.params.bookId;
  const bookData = await getDoc(doc(db, "books", `${id}`));
  const commentData = await getDoc(doc(db, "comment", `${id}`));

  const list = commentData.data() || null;
  // 객체의 값을 배열로 바꾸기
  const comment = Object.values(list)
  
  const item = bookData.data() || null;

  return {
    props: {
      comment: comment,
      item: item,
    },
  };
};

export default DetailPage;
