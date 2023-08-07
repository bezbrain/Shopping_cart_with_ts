import { ShoppingCart } from "../icons/icons";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <main className={headerStyles.main}>
      <section>
        <h1>Shopping Cart</h1>
        <div className={headerStyles.shopping}>
          <ShoppingCart />
          <p>0</p>
        </div>
      </section>
    </main>
  );
};

export default Header;
