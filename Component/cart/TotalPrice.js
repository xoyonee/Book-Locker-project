// 결재내역 컴포넌트
import classes from "./TotalPrice.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { userActions } from "../../store/userReducers"; //user Reducers
import { cartActions } from "../../store/cartReducers"; //cart Reducers
import { useRouter } from "next/router";

const TotalPrice = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const userMoney = useSelector((state) => state.user.userMoney);
  const isLogin = useSelector((state) => state.user.isLogin);
  const userId = useSelector((state) => state.user.userId);
  
  const [total, setTotal] = useState(0);
  const [moneyChk, setMoneyChk] = useState(true);

  useEffect(() => {
    if (cartItems.length !== 0) {
      const totalPrice = 0;
      totalPrice = cartItems.map((items) => {
        return items.price;
      });
      totalPrice = totalPrice.reduce((acc, cur) => {
        return acc + cur;
      });
      setTotal(totalPrice);
    } else {
      setTotal(0);
    }
  }, [cartItems]);

  const dealSubmitHandler = (event) => {
    event.preventDefault();
    if (!isLogin) {
      router.push("/auth");
    }

    if (total < userMoney && isLogin) {
      setMoneyChk(true);
      const money = userMoney - total;
      dispatch(
        userActions.addlibrary({
          userMoney: money,
          userItems: cartItems,
        })
      );
      router.push(`/${userId}/library`);
      dispatch(cartActions.reset());
    } else {
      setMoneyChk(false);
    }
  };

  return (
    <form className={classes.price} onSubmit={dealSubmitHandler}>
      <div className={classes.area}>
        <p>결재 정보</p>
        <div className={classes.card}>
          <ul>
            {cartItems.map((data) => {
              return (
                <li key={Math.random()}>
                  <p>{data.name}</p>
                  <p>&#8361; {data.price.toLocaleString()}</p>
                </li>
              );
            })}
          </ul>
          <div className={classes.total}>
            <p>
              총 결재 금액<span>&#8361; {total.toLocaleString()}</span>
            </p>
          </div>
        </div>
        {!moneyChk && <p>* 금액이 부족합니다</p>}
        {cartItems.length !== 0 && <button>결재하기</button>}
        {cartItems.length === 0 && <button disabled>결재하기</button>}
      </div>
    </form>
  );
};
export default TotalPrice;
