import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import { getProduct } from '../api/api';

const Catalog = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function loadProducts() {
    setLoading(true);
    setError('');
    try {
      const data = await getProduct();
      setProducts(data);
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <section id="all-products" className="animate-fade-in" style={{ paddingTop: '80px' }}>
      <div className="container">

        <div className="pb-2 cursor-pointer" id="back-to-main2" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <i className="bi bi-arrow-left me-2" style={{ fontSize: '1.2rem' }}></i>
          <span>Torna alla Home</span>
        </div>

        <h3 className="text-center fw-normal p-2 mb-4">
          Scopri tutti i prodotti presenti in negozio, i prezzi e le loro caratteristiche!
        </h3>

        <div className="row gx-2 justify-content-around wrap-nowrap row-all-product mb-5">
          {!loading && !error && products.map((product) => (
            <div className="col-48 p-0" key={product.id}>
              <div className="card" onClick={() => {
                navigate(`/catalogo-prodotti/${product.id}`)
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
              }}>
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <div className="d-flex flex-column">
                    <div className="col-12">
                      <h4 className="card-title">{product.name}</h4>
                      <div className="tags mb-2">
                        <span>{product.category1}</span>
                        <span>{product.category2}</span>
                      </div>
                    </div>
                    <hr />
                    <div className="col-12 d-flex justify-content-between price-order">
                      <p className="price">{product.price}</p>
                      <span className="order-link">Scopri ↗</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollToTop />
    </section>
  );
};

export default Catalog;