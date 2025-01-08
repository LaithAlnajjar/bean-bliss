import { Link, useLocation } from "react-router-dom";
import propTypes from "prop-types";
import styles from "./Header.module.css";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

export default function Header({ setCartOpen }) {
  const [active, setActive] = useState(
    useLocation().pathname == "/" ? "home" : "shop"
  );

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
            <Link
              className={`${styles["link"]} ${
                active == "home" && styles["active"]
              } `}
              to="/"
              onClick={() => setActive("home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${styles["link"]} ${
                active == "shop" && styles["active"]
              } `}
              to="shop"
              onClick={() => setActive("shop")}
            >
              Shop
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles["cart-container"]}>
        <ShoppingCart
          className={styles["cart"]}
          onClick={() => setCartOpen(true)}
          size={48}
        />
      </div>
    </header>
  );
}

Header.propTypes = {
  setCartOpen: propTypes.func,
};
