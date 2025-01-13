import { useEffect } from "react";
import styles from "./Cart.module.css";
import propTypes from "prop-types";
import { SquareX } from "lucide-react";

export default function Cart({
  cartOpen,
  setCartOpen,
  cartItems,
  setCartItems,
  addedIds,
  setAddedIds,
}) {
  useEffect(() => {
    const body = document.querySelector("body");
    if (cartOpen) {
      body.classList.add("disabled");
    }
    return () => {
      body.classList.remove("disabled");
    };
  }, [cartOpen]);

  const handleDecrement = (id, amount) => {
    if (amount == 1) {
      setCartItems(
        cartItems.filter((curItem) => {
          if (curItem.item.id == id) {
            return false;
          }
          return true;
        })
      );
      setAddedIds(
        addedIds.filter((curId) => {
          if (curId == id) {
            return false;
          }
          return true;
        })
      );
      return;
    }
    setCartItems(
      cartItems.map((curItem) => {
        //Searches the array
        if (curItem.item.id == id) {
          //If the id matches with the id of the product in the cart
          return { ...curItem, count: curItem.count - 1 }; // the count of that product is decremented by 1
        } else {
          return { ...curItem };
        }
      })
    );
  };

  const handleIncrement = (id) => {
    setCartItems(
      cartItems.map((curItem) => {
        //Searches the array
        if (curItem.item.id == id) {
          //If the id matches with the id of the product in the cart
          return { ...curItem, count: curItem.count + 1 }; // the count of that product is incremented by 1
        } else {
          return { ...curItem };
        }
      })
    );
  };

  if (!cartOpen) return <></>;
  return (
    <>
      <div className={styles["overlay"]}></div>
      <div className={styles["container"]}>
        <SquareX
          className={styles["close"]}
          size={36}
          onClick={() => {
            setCartOpen(false);
          }}
        />
        <h2 className={styles["title"]}>Cart</h2>
        <div>
          {cartItems.length === 0 ? (
            <div className={styles["empty"]}> The cart is empty </div>
          ) : (
            //if cart contains item, loop over them and display each along withi increment/decrement buttons
            cartItems.map((curItem) => {
              return (
                <div className={styles["product"]} key={curItem.item.id}>
                  <img
                    className={styles["product-image"]}
                    src={curItem.item.image_url}
                  />{" "}
                  <div className={styles["product-name"]}>
                    {curItem.item.name}
                  </div>
                  <div className={styles["change"]}>
                    <button
                      className={styles["button"]}
                      onClick={() =>
                        handleDecrement(curItem.item.id, curItem.count)
                      }
                    >
                      -
                    </button>
                    <div className={styles["count"]}>{curItem.count}</div>
                    <button
                      className={styles["button"]}
                      onClick={() => handleIncrement(curItem.item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className={styles["price"]}>
          <div className={styles["total"]}>Total: </div>$
          {cartItems
            .reduce(
              (accumulator, currentValue) =>
                accumulator + currentValue.item.price * currentValue.count,
              0
            )
            .toFixed(2)}
        </div>
      </div>
    </>
  );
}

Cart.propTypes = {
  cartOpen: propTypes.bool,
  setCartOpen: propTypes.func,
  cartItems: propTypes.array,
  setCartItems: propTypes.func,
  addedIds: propTypes.array,
  setAddedIds: propTypes.func,
};
