import SingleCart from "./SingleCart";
import cartStyles from "../styles/Cart.module.css";

const Carts = () => {
  return (
    <main className={cartStyles.main}>
      <p>YOUR BAG</p>
      <SingleCart />
    </main>
  );
};

export default Carts;
