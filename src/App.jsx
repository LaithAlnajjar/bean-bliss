import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default App;
