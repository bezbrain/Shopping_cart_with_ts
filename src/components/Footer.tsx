import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import footerStyles from "../styles/Footer.module.css";
import { useDispatch } from "react-redux/es/exports";
import { clearItems } from "../features/cartSlice";

const Footer = () => {
  const { total, cartArr } = useSelector((store: any) => store.cartStore);

  const dispatch = useDispatch();

  const handleMultply = () => {
    let sum: number = 0;
    cartArr.forEach((each: any) => {
      // console.log(each);
      let toNumber: number = Number(each.price);
      let multiply: number = each.count * toNumber;
      sum += multiply;
    });

    const roundOff = sum.toFixed(2);
    // console.log(roundOff);
    return roundOff;
  };

  useEffect(() => {
    // handleMultply();
  }, []);

  return (
    <main className={footerStyles.main}>
      <hr />
      <section>
        <p>Total</p>
        <button>${handleMultply()}</button>
      </section>
      <button onClick={() => dispatch(clearItems())}>Clear Cart</button>
    </main>
  );
};

export default Footer;
