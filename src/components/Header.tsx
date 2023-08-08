import { useEffect } from "react";
import { ShoppingCart } from "../icons/icons";
import headerStyles from "../styles/Header.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Header = () => {
  const { shoppingCount, cartArr } = useSelector(
    (store: any) => store.cartStore
  );

  // console.log(cartArr);
  const handleShoppingCount = () => {
    let sum: number = 0;
    cartArr.forEach((each: any) => {
      sum += each.count;
    });
    // console.log(sum);
    return sum;
  };

  return (
    <main className={headerStyles.main}>
      <section>
        <h1>Shopping Cart</h1>
        <div className={headerStyles.shopping}>
          <ShoppingCart />
          <p>{handleShoppingCount()}</p>
        </div>
      </section>
    </main>
  );
};

export default Header;
