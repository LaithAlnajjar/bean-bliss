import styles from "./ProductCard.module.css";
import PropTypes from "prop-types";

export default function ProductCard({ name, image_url, price }) {
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
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string,
  image_url: PropTypes.string,
  price: PropTypes.number,
};
