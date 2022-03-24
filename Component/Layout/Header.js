// 헤더 컴포넌트
import classes from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { SignOut } from "../../store/api"; //파이어베이스 로그아웃 연결

const Header = (props) => {
  const dispatch = useDispatch();

  const isLogin = useSelector((state) => state.user.isLogin);
  const userItems = useSelector((state) => state.user.userItems);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const addCart = useSelector((state) => state.cart.addCart);
  const userId = useSelector((state) => state.user.userId);
  const userMoney = useSelector((state) => state.user.userMoney);

  const [moneyMove, setMoneyMove] = useState(false);
  const [cartMove, setCartMove] = useState(false);

  const isLogoutHandler = () => {
    if (isLogin) {
      dispatch(SignOut());
    }
  };

  useEffect(() => {
    if (userMoney === 0) {
      return;
    }
    setMoneyMove(true);

    setTimeout(() => {
      setMoneyMove(false);
    }, 300);
  }, [userMoney]);

  useEffect(() => {
    if (cartItems.length === 0) {
      return;
    }
    if (cartItems.length) setCartMove(true);

    setTimeout(() => {
      setCartMove(false);
    }, 500);
  }, [addCart]);

  return (
    <header
      className={
        props.onNav
          ? `${classes.header}`
          : `${classes.header} ${classes.header_active}`
      }
    >
      {!isLogin && <p>정보를 확인하려면 로그인이 필요합니다.</p>}
      {isLogin && (
        <ul className={classes.info}>
          <li>
            소장
            <span>{userItems.length}</span>
          </li>
          <li>
            소지금
            <span className={moneyMove ? classes.bump : ""}>
              &#8361;
              {userMoney.toLocaleString()}
            </span>
          </li>
          <li>
            장바구니
            <span className={cartMove ? classes.bump : ""}>
              {cartItems.length}
            </span>
          </li>
        </ul>
      )}
      {isLogin && cartMove && (
        <ul className={classes.topBar}>
          <li>장바구니에 추가되었습니다.</li>
        </ul>
      )}
      <ul className={classes.loginBtn}>
        {isLogin && (
          <li className={classes.user}>
            <Image
              src="/assets/userIcon.svg"
              alt="userIcon"
              width="28px"
              height="28px"
            />
            <span>{userId}</span>
          </li>
        )}
        {!isLogin && (
          <li>
            <Link href="/auth">
              <button>로그인</button>
            </Link>
          </li>
        )}
        {isLogin && (
          <li>
            <button onClick={isLogoutHandler}>로그아웃</button>
          </li>
        )}
      </ul>
    </header>
  );
};
export default Header;