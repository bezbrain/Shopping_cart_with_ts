import { ChevronDown, ChevronUp } from "../icons/icons";
import cartStyles from "../styles/Cart.module.css";

const SingleCart = () => {
  return (
    <section>
      <div className={cartStyles.imgCon}>
        <img
          src="https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681753003/react-cart-project/phone-1_e5pkao.png"
          alt="Phone"
        />
      </div>
      <div className={cartStyles.desc}>
        <h3>Samsung Galaxy S8</h3>
        <p>$399.99</p>
        <button>remove</button>
      </div>
      <div className={cartStyles.count}>
        <div className={cartStyles.icon}>
          <ChevronUp />
        </div>
        <p>1</p>
        <div className={cartStyles.icon}>
          <ChevronDown />
        </div>
      </div>
    </section>
  );
};

export default SingleCart;
