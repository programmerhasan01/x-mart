import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Cart from "./components/cart/Cart";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/product/Product";
import Products from "./components/products/Products";
import Register from "./components/register/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
