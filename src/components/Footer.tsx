import { useSelector } from "react-redux/es/exports";
import footerStyles from "../styles/Footer.module.css";
import { useDispatch } from "react-redux/es/exports";
import { clearItems } from "../features/cartSlice";

const Footer = () => {
  const { total } = useSelector((store: any) => store.cartStore);

  const dispatch = useDispatch();

  return (
    <main className={footerStyles.main}>
      <hr />
      <section>
        <p>Total</p>
        <button>${total}</button>
      </section>
      <button onClick={() => dispatch(clearItems())}>Clear Cart</button>
    </main>
  );
};

export default Footer;
