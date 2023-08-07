import { useSelector } from "react-redux/es/exports";
import footerStyles from "../styles/Footer.module.css";

const Footer = () => {
  const { total } = useSelector((store: any) => store.cartStore);

  return (
    <main className={footerStyles.main}>
      <hr />
      <section>
        <p>Total</p>
        <button>${total}</button>
      </section>
      <button>Clear Cart</button>
    </main>
  );
};

export default Footer;
