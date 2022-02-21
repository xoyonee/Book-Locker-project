//input 유효성검사 커스텀 훅
import { useState } from "react";

const useAuth = (optionSet) => {
  const [entered, setentered] = useState("");
  const [inFocus, setInfocus] = useState(false);

  const blankChk = optionSet(entered);
  
  const errorChk = inFocus && !blankChk;

  const inputChangeHandler = (event) => {
    setentered(event.target.value);
  };

  const inputBlurHandler = () => {
    setInfocus(true);
  };

  const reset = () => {
    setentered("");
    setInfocus(false);
  };

  return {
    value: entered,
    invaild: blankChk,
    errorChk,
    inputChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useAuth;
