// 카트에 담긴 아이템 나열 컴포넌트
import classes from "./CartList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cartReducers"; //cart Reducers

const CartList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const deleteHandler = (event) => {
    const id = event.target.name;
    dispatch(cartActions.deletCartItem(id));
  };

  return (
    <div className={classes.list}>
      <h1>장바구니</h1>
      <ul>
        {cartItems.map((data) => {
          return (
            <li key={Math.random()}>
              <div className={classes.img_box}>
                <img src={data.url} alt={data.name} />
              </div>
              <div className={classes.info}>
                <div className={classes.name}>{data.name}</div>
                <div className={classes.price}>
                  &#8361; {data.price.toLocaleString()}
                </div>
              </div>
              <button name={data.id} onClick={deleteHandler}>x</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default CartList;
