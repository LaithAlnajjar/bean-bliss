import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Cart from "./components/Cart/Cart.jsx";
import { Outlet } from "react-router-dom";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [addedIds, setAddedIds] = useState([]);

  return (
    <>
      <Cart
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartItems={cartItems}
        setCartItems={setCartItems}
        addedIds={addedIds}
        setAddedIds={setAddedIds}
      />
      <Header cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <Outlet
        context={{
          cartItems: [cartItems, setCartItems],
          addedIds: [addedIds, setAddedIds],
        }}
      />
      <Footer />
    </>
  );
}

export default App;
