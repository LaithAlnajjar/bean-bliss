import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className={styles["container"]}>
      <div className={styles["hero"]}>
        <div className={styles["hero-text"]}>
          <span className={styles["headline"]}>Brewed Bliss, Bean by Bean</span>
          <span className={styles["subheading"]}>
            Experience coffee like never before. Our beans are handpicked from
            the worlds finest coffee regions, roasted to perfection, and
            tailored to delight your palate. From smooth and subtle to bold and
            intense, discover the perfect roast for every moment.
          </span>
          <Link className={styles["link"]} to={"shop"}>
            <button className={styles["shop"]}>Shop Now</button>
          </Link>
        </div>
        <img
          className={styles["image"]}
          src="../../static/images/hero.jpg"
          alt="high-quality brewery"
        />
      </div>
    </div>
  );
}
