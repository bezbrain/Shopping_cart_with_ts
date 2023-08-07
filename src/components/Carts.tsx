import SingleCart from "./SingleCart";
import cartStyles from "../styles/Cart.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Carts = () => {
  const { cartArr } = useSelector((store: any) => store.cartStore);

  // console.log(cartArr);

  return (
    <main className={cartStyles.main}>
      <p>YOUR BAG</p>
      {cartArr.map((each: any) => {
        return <SingleCart key={each.id} {...each} />;
      })}
    </main>
  );
};

export default Carts;
