// 아이템 나열

import classes from "./BooksList.module.css";
import { useSelector, useDispatch } from "react-redux";

import { cartActions } from "../../store/cartReducers"; //cart 리듀서
import Link from "next/link";

import HorizontalScroll from "react-scroll-horizontal"; // 횡 스크롤

const BooksList = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.dataBase.items);
  const reverseItems = useSelector((state) => state.dataBase.reverseItems);
  let arr = props.onTitle === "신간" ? reverseItems : items;

  const addClickHandler = (event) => {
    event.stopPropagation();
    console.log("클릭");
    const newId = event.target.name;

    dispatch(
      cartActions.addCartItem({
        cartId: newId,
        cartItems: items,
      })
    );
  };

  return (
    <HorizontalScroll
      reverseScroll={true}
      className={classes.parent}
    >
      {arr.map((data) => {
        return (
          <div key={Math.random()} className={classes.li}>
            <div className={classes.img_box} name={data.id}>
              <Link
                href={{
                  pathname: "/detail/[bookId]",
                  query: { bookId: data.id },
                }}
                passHref
              >
                <a>
                  <div className={classes.pan}></div>
                  <img src={data.url} />
                </a>
              </Link>
              {/* <a href={`/detail/${data.id}`}>
                <div className={classes.pan}></div>
                <img src={data.url} />
              </a> */}
              <button
                name={data.id}
                onClick={addClickHandler}
                className={classes.plus}
              >
                +
              </button>
            </div>
            <div className={classes.info}>
              <p>{data.name}</p>
              <p className={classes.author}>{data.author}</p>
              <p className={classes.price}>
                &#8361; {data.price.toLocaleString()}
              </p>
            </div>
          </div>
        );
      })}
    </HorizontalScroll>
  );
};
export default BooksList;
