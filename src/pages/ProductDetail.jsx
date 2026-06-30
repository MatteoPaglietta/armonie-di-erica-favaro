import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProduct } from '../api/api';
import Skeleton from '../components/Skeleton';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productById, setProductById] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [related, setRelated] = useState([]);

  async function loadProducts(){
    setError('');
    setLoading(true);
    try{
      const data = await getProduct();
      const selectedId = Number(id);
      const dataById = data.find((item) => item.id === selectedId);

      if (!dataById) {
        setProductById([]);
        setRelated([]);
        return;
      }

      const relatedProducts = data
        .filter((p) => p.id !== dataById.id)
        .filter(
          (p) =>
            p.category1 === dataById.category1 ||
            p.category2 === dataById.category2
        )
        .slice(0, 3);

      setRelated(relatedProducts);
      setProductById([dataById]);
    } catch(err){
      setError(err.message || 'Errore nel recupero del prodotto');
    } finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, [id]);

  return(
    <section className="product-detail animate-fade-in" style={{ paddingTop: '80px' }}>
      <div className="container">
        <div 
          className="back-to-main mb-4 d-inline-flex align-items-center cursor-pointer" 
          onClick={() => navigate('/catalogo-prodotti')}
          style={{ cursor: 'pointer' }}
        >
          <i className="bi bi-arrow-left me-2" style={{ fontSize: '1.2rem' }}></i>
          <span>Torna al Catalogo</span>
        </div>

        {!loading && error && <div className="section-error text-center mb-4">{error}</div>}
        {!loading && !error && productById.length === 0 && (
          <div className="section-error text-center mb-4">Prodotto non trovato.</div>
        )}

        {loading && (
          <div className="row">
            <div className="col-md-6 mb-4">
              <Skeleton style={{ height: 500, width: '100%', borderRadius: 8 }} />
            </div>
            <div className="col-md-6">
              <Skeleton style={{ height: 36, width: '80%', marginBottom: '1rem' }} />
              <Skeleton style={{ height: 24, width: '40%', marginBottom: '1.5rem' }} />
              <Skeleton style={{ height: 16, width: '100%', marginBottom: '0.5rem' }} />
              <Skeleton style={{ height: 16, width: '95%', marginBottom: '0.5rem' }} />
              <Skeleton style={{ height: 16, width: '85%' }} />
            </div>
          </div>
        )}

        {!loading && !error && productById.map((pById) => (
        <div className="row" key={pById.id}>
          <div className="col-md-6 mb-4 img-dettaglio" data-aos="fade-right">
            <img
              src={pById.image}
              alt={pById.name}
              className="card-img-top rounded shadow-sm immagine-dettaglio"
              style={{
                height: '500px',
                width: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <h1 className="display-5 fw-bold mb-3">{pById.name}</h1>
            <h3 className="mb-4 color-logo">{pById.price}</h3>

            <p className="lead text-muted">
              {pById.description}
            </p>

            <h4 className="mt-5 mb-3">Caratteristiche Principali</h4>
            <ul className="list-unstyled">
              <li> <i className="bi bi-check-circle-fill text-success me-2"></i>{pById.feature.f1}</li>
              <li> <i className="bi bi-check-circle-fill text-success me-2"></i>{pById.feature.f2}</li>
              <li> <i className="bi bi-check-circle-fill text-success me-2"></i>{pById.feature.f3}</li>
            </ul>
            <div className="row justify-content-center mt-5">
              <a 
                className="btn btn-hero d-inline-flex align-items-center justify-content-center gap-2 text-nowrap fw-semibold fs-6 px-4 py-2 rounded"
                style={{ width: '75%' }} 
                href="https://wa.me/3925372152" 
                title="Scopri di più" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp"></i> Scopri di più
              </a>
            </div>
          </div>
        </div>
        ))}

        {!loading && !error && productById.length > 0 && (
          <>
            <hr className="my-5" />
            <h3 className="mb-4 text-center">Prodotti Correlati</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
              {related.map((rel) => (
                <div className="col" key={rel.id} data-aos="fade-up">
                  <div 
                    className="card col-48 h-100 shadow-sm border-0" 
                    onClick={() => {
                      navigate(`/catalogo-prodotti/${rel.id}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }}
                  >
                    <img
                      src={rel.image}
                      className="card-img-top"
                      alt={rel.name}
                      style={{
                        height: '250px',
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                    />
                    <div className="card-body">
                      <div className="d-flex flex-column">
                        <div className="col-12">
                          <h4 className="card-title">{rel.name}</h4>
                          <div className="tags mb-2">
                            <span>{rel.category1}</span>
                            <span>{rel.category2}</span>
                          </div>
                        </div>
                        <hr />
                        <div className="col-12 d-flex justify-content-between price-order">
                          <p className="price">{rel.price}</p>
                          <span className="order-link">Scopri ↗</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
};

export default ProductDetail;