// search 폴더 안 최상위 컴포넌트
import SearchForm from "./SearchForm";
import SearchList from "./SearchList";
import { Fragment } from "react";
import classes from "./Search.module.css";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Search = () => {
  const [searchChk, setsearchChk] = useState(false);
  const [searchWord, setsearchWord] = useState(false);
  const search = useSelector((state) => state.dataBase.search);
 
  useEffect(() => {
    if (search.length !== 0) {
      setsearchChk(true);
    } else {
      setsearchChk(false);
    }
  }, [search]);

  const SearchCheckHandler = (word) => {
    setsearchWord(word);
  };

  return (
    <Fragment>
      <SearchForm search={SearchCheckHandler} />
      {searchChk && <SearchList onTitle="검색 결과" />}
      {!searchChk && (
        <h1 className={classes.h1}>
          '{searchWord}'에 대한 도서 검색 결과가 없습니다.
        </h1>
      )}
    </Fragment>
  );
};

export default Search;
