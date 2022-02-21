// 아이템 상세페이지 컴포넌트
// comment를 제외한 상단부분 요소들
import classes from "./Bookdetail.module.css";
import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Bookdetail = () => {
  const data = useSelector((state) => state.dataBase.product);
  const router = useRouter();

  useEffect(() => {
    if (data === null) {
      router.push("/404");
    }
  }, []);
  return (
    <Fragment>
      {data !== null && (
        <Fragment>
          <section>
            <div className={classes.book_title}>
              <div className={classes.img_box}>
                <img src={data.url} alt={data.name} />
              </div>
              <div className={classes.book_name}>
                <h1>{data.name}</h1>
                <p>{data.author}</p>
              </div>
            </div>
          </section>

          <section className={classes.book_info_box}>
            <article className={classes.publication}>
              <div>
                <div className={classes.tag}>출간 정보</div>
                <div>{data.day}</div>
              </div>
              <div>
                <div className={classes.tag}>파일 정보</div>
                <div>평균 0.3MB</div>
              </div>
              <div>
                <div className={classes.tag}>지원 기기</div>
                <div>PAPER/iOS/Android/PC/Mac</div>
              </div>
              <div>
                <div className={classes.tag}>페이지</div>
                <div>{data.page}</div>
              </div>
              <div>
                <div className={classes.tag}>출간</div>
                <div>{data.publisher}</div>
              </div>
              <div>
                <div className={classes.tag}></div>
                <div></div>
              </div>
            </article>

            <article className={classes.intro}>
              <h1>책 소개</h1>
              <p>{data.title}</p>
              {data.desc && <p>{data.desc}</p>}
            </article>

            <article className={classes.intro}>
              <h1>저자 프로필</h1>
              <p>{data.info}</p>
              <div className={classes.btn_more}></div>
            </article>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Bookdetail;
