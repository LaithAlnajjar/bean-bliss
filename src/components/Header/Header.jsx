import { Link } from "react-router-dom";
import propTypes from "prop-types";
import styles from "./Header.module.css";

export default function Header({ setCartOpen }) {
  return (
    <header className={styles["header"]}>
      <div className={styles["logo-section"]}>
        <img
          src="../../../../src/assets/BeanBliss.png"
          className={styles["logo"]}
        />
        <h3>Bean Bliss</h3>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
        </ul>
      </nav>
      <button onClick={() => setCartOpen(true)}>OPEN CART</button>
    </header>
  );
}

Header.propTypes = {
  setCartOpen: propTypes.func,
};
