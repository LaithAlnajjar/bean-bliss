import { useEffect } from "react";
import styles from "./Cart.module.css";
import propTypes from "prop-types";

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
    body.classList.toggle("disabled");
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
        <div>
          {cartItems.length === 0 ? (
            <div> Cart is empty </div>
          ) : (
            cartItems.map((curItem) => {
              return (
                <div key={curItem.item.id}>
                  <img
                    className={styles["product-image"]}
                    src={curItem.item.image_url}
                  />{" "}
                  <div>{curItem.item.name}</div>
                  <div>
                    <button
                      onClick={() =>
                        handleDecrement(curItem.item.id, curItem.count)
                      }
                    >
                      -
                    </button>
                    {curItem.count}
                    <button onClick={() => handleIncrement(curItem.item.id)}>
                      +
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <button
          onClick={() => {
            setCartOpen(false);
          }}
        >
          Close Cart
        </button>
        <div className={styles["price"]}>
          Total:{" "}
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
