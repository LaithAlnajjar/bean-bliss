import { useState, useEffect } from "react";
import classes from "./Products.module.css";

export default function Header() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("https://fake-coffee-api.vercel.app/api?limit=9") //fetch 9 items from the fake coffee api
      .then((res) => res.json())
      .then((data) => setProductData(data)) //set the fetched items in the state
      .catch((err) => console.log(err));
  }, []);

  return productData.length == 9 ? ( //checks if all items have been fetched
    <div className={classes["product-grid"]}>
      {" "}
      {productData.map((product) => {
        return (
          <div className={classes["product-card"]} key={product.id}>
            <img className={classes["product-image"]} src={product.image_url} />
            <p className={classes["product-label"]}> {product.name}</p>
          </div>
        );
      })}
    </div>
  ) : (
    <div>Loading</div>
  );
}
