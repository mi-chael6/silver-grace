import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../pages/home/components/Homepage";
import ProductListing from "../pages/product_listing/components/ProductListing";
import Product_Detail from "../pages/product_detail/components/Product_Detail";
import Contact from "../pages/contact/components/Contact";
import About from "../pages/about_us/components/About";
import Cart from "../pages/cart/components/Cart";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      <Route path="/home" element={<Homepage />} />
      <Route path="/shop" element={<ProductListing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product_Detail />} />
      <Route path="/cart" element={<Cart />} />

    </Routes>
  );
}
