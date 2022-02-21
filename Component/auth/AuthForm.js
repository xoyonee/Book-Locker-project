// 인증 컴포넌트

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useState } from "react";
import classes from "./AuthForm.module.css";
import useAuth from "../../hooks/useAuth"; //input 유효성검사 커스텀 훅
import { CreateUser } from "../../store/api";
import { SignIn } from "../../store/api";
import LoadingIndicator from "../UI/LoadingIndicator";

const AuthForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [loginChk, setLoginChk] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    value: emailEntered,
    invaild: emailBlankChk,
    errorChk: errorEmailChk,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useAuth((value) => value.includes("@", "."));

  const {
    value: passwordEntered,
    invaild: passwordBlankChk,
    errorChk: errorPasswordChk,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useAuth((value) => value.trim().length >= 6);

  const switchAuthModeHandler = () => {
    setLoginChk((chk) => !chk);
  };

  // 버튼
  let basicBtn = false;

  if (passwordBlankChk && emailBlankChk) {
    basicBtn = true;
  }


  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);

    if (!passwordBlankChk && !emailBlankChk) {
      return;
    }

    emailReset();
    passwordReset();

    if (!loginChk) {
      // 로그인
      dispatch(SignIn(emailEntered, passwordEntered));
    } else {
      // 회원가입
      dispatch(CreateUser(emailEntered, passwordEntered));
    }
    router.push("/");
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const passwordClasses = errorPasswordChk
    ? `${classes.control} ${classes.invalid}`
    : classes.control;
  const emailClasses = errorEmailChk
    ? `${classes.control} ${classes.invalid}`
    : classes.control;

  return (
    <section className={classes.auth}>
      <h1>{loginChk ? "회원가입" : "로그인"}</h1>
      <form onSubmit={submitHandler}>
        <div className={emailClasses}>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            required
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={emailEntered}
            placeholder="이메일을 입력하세요"
          />
          {errorEmailChk && <p className={classes.error}>* 입력하세요</p>}
        </div>
        <div className={passwordClasses}>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            required
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={passwordEntered}
            placeholder="비밀번호를 입력하세요"
          />
          {errorPasswordChk && (
            <p className={classes.error}>*6자이상 입력하세요</p>
          )}
        </div>
        <div className={classes.actions}>
          {!loading && (
            <button disabled={!basicBtn}>
              {loginChk ? "회원가입" : "로그인"}
            </button>
          )}
          {loading && <LoadingIndicator />}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {loginChk ? "로그인" : "회원가입"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
