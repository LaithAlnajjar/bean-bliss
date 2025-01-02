import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import classes from "./Products.module.css";

export default function Header() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fake-coffee-api.vercel.app/api?limit=9") //fetch 9 items from the fake coffee api
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: There was an error loading the data</p>;
  return (
    <div className={classes["product-grid"]}>
      {productData.map((product) => {
        return (
          <ProductCard
            key={product.id}
            name={product.name}
            image_url={product.image_url}
            price={product.price}
          />
        );
      })}
    </div>
  );
}
