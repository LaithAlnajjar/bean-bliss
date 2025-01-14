import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Products.module.css";
import { useOutletContext } from "react-router-dom";
import { OrbitProgress } from "react-loading-indicators";

export default function Products() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {
    cartItems: [cartItems, setCartItems],
    addedIds: [addedIds, setAddedIds],
  } = useOutletContext();

  useEffect(() => {
    fetch("https://fake-coffee-api.vercel.app/api?limit=12") //fetch 9 items from the fake coffee api
      .then((res) => res.json())
      .then((data) => {
        setProductData(data); //set the fetched items in the state
        setLoading(false); //stop loading
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className={styles["loading"]}>
        <OrbitProgress
          color="#e6c570"
          size="large"
          text="Loading"
          textColor="#e6c570"
        />{" "}
      </div>
    );
  if (error) return <p>Error: There was an error loading the data</p>;
  return (
    <div className={styles["product-grid"]}>
      {productData.map((product) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image_url={product.image_url}
            price={product.price}
            cartItems={cartItems}
            setCartItems={setCartItems}
            addedIds={addedIds}
            setAddedIds={setAddedIds}
          />
        );
      })}
    </div>
  );
}
