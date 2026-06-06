import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import SectionLoader from '../components/SectionLoader';
import { getProduct } from '../api/api';

const Catalog = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const hasPaginated = useRef(false);

  async function loadProducts() {
    setLoading(true);
    setError('');
    try {
      const data = await getProduct();
      setProducts(data);
      setCurrentPage(1);
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    const updateProductsPerPage = () => {
      setViewportWidth(window.innerWidth);

      if (window.innerWidth >= 1400) {
        setProductsPerPage(10);
        return;
      }

      if (window.innerWidth >= 1200) {
        setProductsPerPage(8);
        return;
      }

      if (window.innerWidth >= 992) {
        setProductsPerPage(9);
        return;
      }

      setProductsPerPage(8);
    };

    updateProductsPerPage();
    window.addEventListener('resize', updateProductsPerPage);
    return () => window.removeEventListener('resize', updateProductsPerPage);
  }, []);

  useEffect(() => {
    if (!hasPaginated.current) {
      hasPaginated.current = true;
      return;
    }

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }, [currentPage]);

  useEffect(() => {
    const updatedTotalPages = Math.max(1, Math.ceil(products.length / productsPerPage));
    if (currentPage > updatedTotalPages) {
      setCurrentPage(updatedTotalPages);
    }
  }, [products.length, productsPerPage, currentPage]);

  const totalPages = Math.max(1, Math.ceil(products.length / productsPerPage));
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = products.slice(startIndex, startIndex + productsPerPage);
  const isDesktop1200To1400 = viewportWidth >= 1200 && viewportWidth < 1400;
  const missingSlots = isDesktop1200To1400 ? (4 - (paginatedProducts.length % 4)) % 4 : 0;
  const productsWithPlaceholders = [
    ...paginatedProducts,
    ...Array.from({ length: missingSlots }, (_, index) => ({
      id: `placeholder-${currentPage}-${index}`,
      isPlaceholder: true,
    })),
  ];

  const goToPage = (page) => {
    const nextPage = Math.min(totalPages, Math.max(1, page));
    if (nextPage === currentPage) return;
    setCurrentPage(nextPage);
  };

  return (
    <section id="all-products" className="animate-fade-in" style={{ paddingTop: '80px' }}>
      <div className="container">

        <div className="back-to-main mb-4 d-inline-flex align-items-center cursor-pointer" id="back-to-main2" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <i className="bi bi-arrow-left me-2" style={{ fontSize: '1.2rem' }}></i>
          <span>Torna alla Home</span>
        </div>

        <h3 className="text-center fw-normal p-2 mb-4">
          Scopri tutti i prodotti presenti in negozio, i prezzi e le loro caratteristiche!
        </h3>

        {loading && <SectionLoader label="Caricamento prodotti..." />}
        {!loading && error && <div className="section-error text-center mb-4">{error}</div>}

        <div className="row gx-4 gy-3 row-all-product mb-4">
          {!loading && !error && productsWithPlaceholders.map((product) => (
            product.isPlaceholder ? (
              <div className="col-48 p-0 catalog-placeholder-slot" key={product.id} aria-hidden="true"></div>
            ) : (
              <div className="col-48 p-0" key={product.id}>
                <div className="card" onClick={() => {
                  navigate(`/catalogo-prodotti/${product.id}`)
                  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                }}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
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
            )
          ))}
        </div>

        {!loading && !error && products.length > 0 && (
          <>
            <div className="carousel-controls align-items-baseline mb-2">
              <button
                className="carousel-btn prev"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                ‹
              </button>
              <span className="carousel-page">{currentPage} / {totalPages}</span>
              <button
                className="carousel-btn next"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                ›
              </button>
            </div>

            <div className="carousel-cta text-center mb-5">
              <a
                href="#all-products"
                className="link-see-all"
                onClick={(e) => {
                  e.preventDefault();
                  goToPage(1);
                }}
              >
                Torna alla prima pagina
              </a>
            </div>
          </>
        )}
      </div>
      <ScrollToTop />
    </section>
  );
};

export default Catalog;