//댓글 컴포넌트

// 파이어베이스 연결
import classes from "./comment.module.css";
import app from "../../store/firebaseConfig";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
const db = getFirestore(app);

import { useRef } from "react";
import { useSelector } from "react-redux";

const Comment = () => {
  const userId = useSelector((state) => state.user.userId);
  const comment = useSelector((state) => state.dataBase.comment);
  const isLogin = useSelector((state) => state.user.isLogin);
  const commentInput = useRef();

  // 댓글 생성
  const commentSubmitHandler = async (event) => {
    event.preventDefault();
    if (isLogin) {
      let url = window.location.href;
      url = url.split("detail/")[1];

      let number = comment.length + 1;
      const commentText = commentInput.current.value;
      await updateDoc(doc(db, "comment", `${url}`), {
        [`${number}`]: { userId: userId, comment: commentText },
      });
      commentInput.current.value = "";
    } else {
      alert("로그인이 필요합니다.");
    }
  };

  return (
    <section className={classes.comment}>
      <h1>리뷰</h1>
      <form onSubmit={commentSubmitHandler}>
        <div className={classes.write}>
          <div className={classes.side}>
            <div className={classes.profile}>{userId.slice(0, 1)}</div>
          </div>
          <input
            className={classes.rivew_input}
            type="text"
            ref={commentInput}
            placeholder={isLogin ? "댓글 추가" : '로그인이 필요합니다.'}
            disabled={isLogin ? null : 'disabled'}
          />
          <button>제출</button>
        </div>
      </form>

      <ul className={classes.rivew_list}>
        {comment.map((txt) => {
          return (
            <li className={classes.border} key={Math.random()}>
              <div className={classes.rivew_box}>
                <div className={classes.side}>
                  <div className={classes.profile}>
                    {txt.userId.slice(0, 1)}
                  </div>
                </div>
                <div className={classes.rivew_txt}>{txt.comment}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Comment;
