import { useState } from "react";
import styles from "./ProductCard.module.css";
import propTypes from "prop-types";

export default function ProductCard({
  id,
  name,
  image_url,
  price,
  cartItems,
  setCartItems,
  addedIds,
  setAddedIds,
}) {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
    else setQuantity(1);
  };
  const handleIncrement = () => {
    if (quantity < 99) setQuantity(quantity + 1);
    else setQuantity(99);
  };

  const handleBlur = (e) => {
    if (e.target.value < 1) setQuantity(1);
    else if (e.target.value > 99) setQuantity(99);
    else setQuantity(e.target.value);
  };

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAdd = () => {
    if (addedIds.includes(id)) {
      setCartItems(
        cartItems.map((item) => {
          if (item.item.id == id) {
            return { ...item, count: item.count + quantity };
          }
          return item;
        })
      );
    } else {
      setAddedIds([...addedIds, id]);
      setCartItems([
        ...cartItems,
        { item: { id, name, image_url, price }, count: quantity },
      ]);
    }
  };

  return (
    <div className={styles["product-card"]}>
      <img
        className={styles["product-image"]}
        src={image_url}
        alt="product image"
      />
      <div className={styles["product-label"]}>
        <div className={styles["product-name"]}>{name}</div>
        <div className={styles["product-price"]}>{price}</div>
      </div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleAdd}>Add to Cart</button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: propTypes.number,
  name: propTypes.string,
  image_url: propTypes.string,
  price: propTypes.number,
  cartItems: propTypes.array,
  setCartItems: propTypes.func,
  addedIds: propTypes.array,
  setAddedIds: propTypes.func,
};
