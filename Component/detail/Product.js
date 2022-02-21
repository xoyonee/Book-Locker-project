//detail 폴더 안 최상위 컴포넌트
import Bookdetail from "./Bookdetail";
import Comment from "./Comment";
import classes from "./Product.module.css";

const Product = () => {
  return (
    <div className={classes.detail}>
      <Bookdetail />
      <Comment />
    </div>
  );
};

export default Product;