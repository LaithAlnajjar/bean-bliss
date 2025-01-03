import { Link } from "react-router-dom";

export default function Header({ setCartOpen }) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
        </ul>
      </nav>
      <button onClick={() => setCartOpen(true)}>OPEN CART</button>
    </header>
  );
}
