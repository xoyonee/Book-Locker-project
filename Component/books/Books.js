// 메인 index의 section
// books 폴더 안 컴포넌트 중 최상위 컴포넌트
import classes from "./Books.module.css";
import BooksList from "./BooksList";

const Books = (props) => {
  return (
    <section className={classes.list}>
      <h1>{props.onTitle}</h1>
      <div className={classes.ul}>
        <BooksList onTitle={props.onTitle} />
      </div>
    </section>
  );
};

export default Books;
