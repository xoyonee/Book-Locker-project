// 검색 결과 아이템 리듀서에 저장
import classes from "../../Component/books/BooksList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cartReducers";
import Link from "next/link";
import { dataBaseActions } from "../../store/dataBaseReducers";
import { useRouter } from "next/router";

const SearchList = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const items = useSelector((state) => state.dataBase.items);
  const search = useSelector((state) => state.dataBase.search);

  const addClickHandler = (event) => {
    const newId = event.target.name;
    dispatch(
      cartActions.addCartItem({
        cartId: newId,
        cartItems: items,
      })
    );
      router.push('/sfsdf/cart')
  };
  const reseteHandler = () => {
    dispatch(
      dataBaseActions.searchItems({
        search: [],
      })
    );
  };
  return (
    <section className={`${classes.list} ${classes.blank}`}>
      <h1>{props.onTitle}</h1>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <div className={classes.img_box} >
            <Link
              href={{
                pathname: "/detail/[bookId]",
                query: { bookId: search.id },
              }}
              passHref
            >
              <a onClick={reseteHandler}>
                <div className={classes.pan}></div>
                <img src={search.url} />
              </a>
            </Link>
            <button
              name={search.id}
              onClick={addClickHandler}
              className={classes.plus}
            >
              +
            </button>
          </div>
          <div className={classes.info}>
            <p>{search.name}</p>
            <p className={classes.author}>{search.author}</p>
          </div>
        </li>
      </ul>
    </section>
  );
};
export default SearchList;
