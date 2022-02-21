// Layout 폴더 안 최상위 컴포넌트
import Header from "./Header";
import NavBar from "./NavBar";

import classes from "./Layout.module.css";
import { useState } from "react";

const Layout = (props) => {
  const [headerChk, setHeaderChk] = useState(true);

  const navSpendHandler = (navChk) => { //navBar active check
    const headerChk = !navChk;
    setHeaderChk(headerChk);
  };

  return (
    <div className={classes.wrap}>
      <NavBar onNav={navSpendHandler} />
      <div
        className={
          headerChk
            ? `${classes.contents}`
            : `${classes.contents} ${classes.contents_active}`
        }
      >
        <Header onNav={headerChk} />
        <main>{props.children}</main>
        <footer className={classes.footer}>
          <div></div>
          <p>© 2021. kim so yeon. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
