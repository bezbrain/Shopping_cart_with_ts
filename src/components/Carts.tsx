import SingleCart from "./SingleCart";
import cartStyles from "../styles/Cart.module.css";
import { data } from "../data";

const Carts = () => {
  return (
    <main className={cartStyles.main}>
      <p>YOUR BAG</p>
      {data.map((each) => {
        return <SingleCart key={each.id} {...each} />;
      })}
    </main>
  );
};

export default Carts;
