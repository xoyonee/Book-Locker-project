import app from "../store/firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { userActions } from "./userReducers";

const auth = getAuth(app);

// 회원가입
export const CreateUser = (email, password) => {
  return async (dispatch) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("성공");

        dispatch(
          userActions.setIsLoading({
            isLoading: true,
          })
        );
      })
      .catch((error) => {
        alert("실패하였습니다. 다시 시도하세요");
      });
  };
};

// 로그인
export const SignIn = (email, password) => {
  return async (dispatch) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user;

        console.log("성공");
        
        dispatch(
          userActions.setIsLogin({
            isLogin: true,
            userId: user.email,
            tokken: user.uid,
          })
        );
      })
      .catch((error) => {
        alert("실패하였습니다. 다시 시도하세요");
      });
  };
};

// 로그아웃
export const SignOut = () => {
  return async (dispatch) => {
    await signOut(auth).then(() => {
      console.log("성공");

      dispatch(
        userActions.setIsLoading({
          isLoading: false,
        })
      );
      dispatch(
        userActions.setIsLogin({
          isLogin: false,
        })
      );
    });
  };
};
