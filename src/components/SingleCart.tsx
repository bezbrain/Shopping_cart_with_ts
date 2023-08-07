import { ChevronDown, ChevronUp } from "../icons/icons";
import cartStyles from "../styles/Cart.module.css";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { decreaseCount, increaseCount } from "../features/cartSlice";

interface Cart {
  id: number;
  count: number;
  img: string;
  brand: string;
  price: string;
}

const SingleCart: React.FC<Cart> = ({ id, img, brand, price, count }) => {
  const dispatch = useDispatch();

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
        <div
          className={cartStyles.icon}
          onClick={() => dispatch(increaseCount(id))}
        >
          <ChevronUp />
        </div>
        <p>{count}</p>
        <div
          className={cartStyles.icon}
          onClick={() => dispatch(decreaseCount(id))}
        >
          <ChevronDown />
        </div>
      </div>
    </section>
  );
};

export default SingleCart;
