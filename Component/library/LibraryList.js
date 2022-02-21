// 보관함 컴포넌트
import classes from "./LibraryList.module.css";
import { useSelector } from "react-redux";

const LibraryList = () => {
  const userItems = useSelector((state) => state.user.userItems);
  return (
    <section className={classes.list}>
      <h1>보관함</h1>
      <ul className={classes.ul}>
        {userItems.length === 0 && <p>북을 소장하고 있지 않습니다.</p>}
        {userItems.map((data) => {
          return (
            <li key={Math.random()} className={classes.li}>
              <div className={classes.img_box}>
                <div className={classes.pan}></div>
                <img src={data.url} />
                <button name={data.id} className={classes.plus}>
                  보기
                </button>
              </div>
              <div className={classes.info}>
                <p>{data.name}</p>
                <p className={classes.author}>{data.author}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default LibraryList;
