import Navbar from './components/Navbar';
import Footer from './components/Footer'; // <--- Importa il footer
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <ScrollToTop />
      <Navbar />
      
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo-prodotti" element={<Catalog />} />
          <Route path="/catalogo-prodotti/:id" element={<ProductDetail />} />
        </Routes>
      </div>

      {/* Footer Component */}
      <Footer /> 
    </div>
  );
}

export default App;