import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
  }, [pathname]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo-prodotti" element={<Catalog />} />
          <Route path="/catalogo-prodotti/:id" element={<ProductDetail />} />
        </Routes>
      </div>

      <Footer /> 
    </div>
  );
}

export default App;