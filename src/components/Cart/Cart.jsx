import styles from "./Cart.module.css";
import propTypes from "prop-types";

export default function Cart({
  cartOpen,
  setCartOpen,
  cartItems,
  setCartItems,
}) {
  if (!cartOpen) return <></>;
  return cartItems.length == 0 ? (
    <div className={styles["container"]}>
      <div>CART IS EMPTY</div>
      <button
        onClick={() => {
          setCartOpen(false);
        }}
      >
        Close Cart
      </button>
    </div>
  ) : (
    <div className={styles["container"]}>
      <div>CART IS FUULLL</div>
      <button
        onClick={() => {
          setCartOpen(false);
        }}
      >
        Close Cart
      </button>
    </div>
  );
}

Cart.propTypes = {
  cartOpen: propTypes.bool,
  setCartOpen: propTypes.func,
  cartItems: propTypes.array,
  setCartItems: propTypes.func,
};
