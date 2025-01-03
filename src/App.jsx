import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Cart from "./components/Cart/Cart.jsx";
import { Outlet } from "react-router-dom";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Cart
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <Header cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <Outlet cartItems={cartItems} setCartItems={setCartItems} />
      <Footer />
    </>
  );
}

export default App;
