import { ShoppingCart } from "../icons/icons";
import headerStyles from "../styles/Header.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Header = () => {
  const { shoppingCount } = useSelector((store: any) => store.cartStore);

  return (
    <main className={headerStyles.main}>
      <section>
        <h1>Shopping Cart</h1>
        <div className={headerStyles.shopping}>
          <ShoppingCart />
          <p>{shoppingCount}</p>
        </div>
      </section>
    </main>
  );
};

export default Header;
