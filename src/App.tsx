import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import MakeupProducts from "./pages/MakeupProducts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartPage from "./pages/CartPage";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/makeup" element={<MakeupProducts />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
