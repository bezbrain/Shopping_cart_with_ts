import { useEffect } from "react";
import { ChevronDown, ChevronUp } from "../icons/icons";
import cartStyles from "../styles/Cart.module.css";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import {
  decreaseCount,
  increaseCount,
  removeItem,
} from "../features/cartSlice";
import { useSelector } from "react-redux";

interface Cart {
  id: number;
  count: number;
  img: string;
  brand: string;
  price: string;
}

const SingleCart: React.FC<Cart> = ({ id, img, brand, price, count }) => {
  const { cartArr } = useSelector((store: any) => store.cartStore);
  const dispatch = useDispatch();

  return (
    <section>
      <div className={cartStyles.imgCon}>
        <img src={img} alt="Phone" />
      </div>
      <div className={cartStyles.desc}>
        <h3>{brand}</h3>
        <p>${price}</p>
        <button onClick={() => dispatch(removeItem(id))}>remove</button>
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
