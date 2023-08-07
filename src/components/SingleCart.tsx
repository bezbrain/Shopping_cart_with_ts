import { ChevronDown, ChevronUp } from "../icons/icons";
import cartStyles from "../styles/Cart.module.css";
// import { Cart } from "../../model";

interface Cart {
  id: number;
  count: number;
  img: string;
  brand: string;
  price: string;
}

const SingleCart: React.FC<Cart> = ({ img, count, brand, price }) => {
  return (
    <section>
      <div className={cartStyles.imgCon}>
        <img src={img} alt="Phone" />
      </div>
      <div className={cartStyles.desc}>
        <h3>{brand}</h3>
        <p>${price}</p>
        <button>remove</button>
      </div>
      <div className={cartStyles.count}>
        <div className={cartStyles.icon}>
          <ChevronUp />
        </div>
        <p>{count}</p>
        <div className={cartStyles.icon}>
          <ChevronDown />
        </div>
      </div>
    </section>
  );
};

export default SingleCart;
