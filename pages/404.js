// 에러 페이지
import classes from "./404.module.css";
import Image from "next/image";

const Custom404 = () => {
  return (
    <div className={classes.error}>
      <p>페이지를 찾을 수 없습니다.</p>
      <Image src="/img/404.png" alt="404" width="500px" height="500px"/>
    </div>
  );
};

export default Custom404;
