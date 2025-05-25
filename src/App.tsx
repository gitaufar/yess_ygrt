import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Navbar from './componen/Navbar';
import Footer from './componen/Footer';

function App() {

  return (
    <BrowserRouter>
      <Navbar count={0} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
