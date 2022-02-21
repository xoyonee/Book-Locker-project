// 네비 컴포넌트
import classes from "./NavBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/userReducers";

const NavBar = (props) => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);
  const tokken = useSelector((state) => state.user.tokken);
  const [navBarChk, setNavBarChk] = useState(true);

  useEffect(() => {
    if (navigator.maxTouchPoints >= 1) {
      //터치기기 check
      setNavBarChk(!navBarChk);
      props.onNav(navBarChk); //navBar active check - layout으로 전달
    }
  }, []);

  const navBarHandler = () => {
    setNavBarChk(!navBarChk);
    props.onNav(navBarChk); //navBar active check - layout으로 전달
  };

  const addMoneyHandler = () => {
    if (isLogin) {
      dispatch(userActions.addUserMoney());
    }
  };

  return (
    <nav
      className={
        navBarChk ? `${classes.nav}` : `${classes.nav} ${classes.nav_active}`
      }
    >
      <div className={classes.logo}>
        <Link href="/">booklocker</Link>
      </div>
      <ul>
        <li className={classes.double}>
          <div onClick={navBarHandler}>
            <Image
              src="/assets/doubleArrowIcon.svg"
              alt="doubleArrowIcon"
              width="15px"
              height="15px"
            />
          </div>
        </li>
        <Link href={isLogin ? `/${tokken}/library` : "/auth"}>
          <li className={classes.li}>
            <Image
              src="/assets/lockerIcon.svg"
              alt="lockerIcon"
              width="28px"
              height="28px"
              margin="0 auto"
            />
            {navBarChk && <span>내 서재</span>}
          </li>
        </Link>
        <Link href="/">
          <li className={classes.li}>
            <Image
              src="/assets/shoppingIcon.svg"
              alt="shoppingIcon"
              width="28px"
              height="28px"
            />
            {navBarChk && <span>쇼핑하기</span>}
          </li>
        </Link>
        <Link href="/search">
          <li className={classes.li}>
            <Image
              src="/assets/searchIcon.svg"
              alt="searchIcon"
              width="28px"
              height="28px"
            />
            {navBarChk && <span>검색하기</span>}
          </li>
        </Link>
        <Link href="/fdsfd/cart">
          <li className={classes.li}>
            <Image
              src="/assets/cartIcon.svg"
              alt="cartIcon"
              width="28px"
              height="28px"
            />
            {navBarChk && <span>장바구니</span>}
          </li>
        </Link>
      </ul>
      <div className={classes.cash}>
        <div onClick={addMoneyHandler}>
          <Image
            src="/assets/dollarIcon.svg"
            alt="dollarIcon"
            width="28px"
            height="28px"
          />
          {navBarChk && <span>충전하기</span>}
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
