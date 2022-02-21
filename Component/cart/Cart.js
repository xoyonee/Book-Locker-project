// cart 폴더 안 컴포넌트 중 최상위 컴포넌트
import CartList from "./CartList";
import TotalPrice from "./TotalPrice";
import classes from './Cart.module.css'

const Cart = () => {
    return (
      <section className={classes.sec}>
          <CartList/>
          <TotalPrice/>
      </section>
    );
  };
  export default Cart;