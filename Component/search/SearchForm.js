import classes from "./SearchForm.module.css";
import { useRef } from "react";
import Image from "next/image";

import { searchDatabase } from "../../store/seachDatabase"; // 파이어베이스 연결
import { useDispatch } from "react-redux";

const SearchForm = (props) => {
  const dispatch = useDispatch();
  const searchInput = useRef();

  const searchSubmitHandler = (event) => {
    event.preventDefault();

    const searchWord = searchInput.current.value;
    dispatch(searchDatabase(searchWord)); //아이템 가져오기
    props.search(searchWord); //검색 단어 search.js에 보내기
  };

  return (
    <form className={classes.form} onSubmit={searchSubmitHandler}>
      <label htmlFor="search"></label>
      <input
        type="text"
        id="search"
        placeholder="책 제목을 입력하세요"
        ref={searchInput}
      />
      <button>
        <Image
          className={classes.icon}
          src="/assets/searchIcon_b.svg"
          alt="searchIcon"
          width="28px"
          height="28px"
        />
      </button>
      <div className={classes.line}></div>
    </form>
  );
};

export default SearchForm;
