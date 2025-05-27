import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Navbar from './componen/Navbar';
import Footer from './componen/Footer';
import { useState } from 'react';
import type { ProductData } from './data/product';

function App() {

  const [cart, setCart] = useState<ProductData[]>([]);

  const productClick = (item: ProductData) => {
    setCart([...cart, item]);
  }

  return (
    <BrowserRouter>
      <Navbar count={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product onClick={productClick}/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
