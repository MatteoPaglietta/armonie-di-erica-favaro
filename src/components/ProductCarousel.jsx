import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProduct } from '../api/api';
import SectionLoader from './SectionLoader';

const ProductCarousel = () => {
  const [productsData, setProductsData] = useState([]);
  const [error,setError] = useState('');
  const [loading, setLoading] = useState(true);

  async function loadProducts(){
    setLoading(true);
    setError('');
    try{
      const data = await getProduct();
      setProductsData(data.slice(0, 6));
    } catch (err){
      setError(err.message);
    }finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
    loadProducts();
  },[]);

  const [cardIndex, setCardIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const updateVisibleCards = () => {
    if (window.innerWidth >= 992) setVisibleCards(3);
    else if (window.innerWidth >= 768) setVisibleCards(2);
    else setVisibleCards(1);
  };

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const totalPages = window.innerWidth >= 768 ? 4 : 6;
  const maxIndex = Math.max(0, productsData.length - visibleCards);
  const currentPage = maxIndex === 0 ? 1 : Math.min(totalPages, Math.round((cardIndex / maxIndex) * (totalPages - 1)) + 1);

  const scrollNext = () => {
    if (cardIndex < maxIndex) {
      setCardIndex(prev => prev + 1);
    }
  };

  const scrollPrev = () => {
    if (cardIndex > 0) {
      setCardIndex(prev => prev - 1);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
        const cards = scrollRef.current.querySelectorAll('.card-wrapper');
        if (cards[cardIndex]) {
            cards[cardIndex].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
        }
    }
  }, [cardIndex]);

  const touchStart = useRef(0);
  const wheelLocked = useRef(false);
  const handleTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const delta = touchStart.current - touchEnd;
    if (Math.abs(delta) > 50) { 
      if (delta > 0) scrollNext();
      else scrollPrev();
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();

    if (wheelLocked.current) return;

    const primaryDelta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(primaryDelta) < 10) return;

    wheelLocked.current = true;
    if (primaryDelta > 0) scrollNext();
    else scrollPrev();

    setTimeout(() => {
      wheelLocked.current = false;
    }, 300);
  };

  return (
    <section className="mt-3" id="prodotti">
      <div className="container">
        <div className="row">
          <div className="carousel-container">
            <div 
                className="carousel-track-wrapper" 
                ref={scrollRef}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onWheel={handleWheel}
                style={{ touchAction: 'pan-y' }}
            >
              {loading && <SectionLoader label="Caricamento prodotti..." />}
              {!loading && error && <div className="section-error text-center mb-4">{error}</div>}
              <div className="carousel-track mb-3">
                {!loading && !error && productsData.map((prod) => (
                  <div key={prod.id} className={`col-9 col-md-5 col-lg-32 card-wrapper ps-2 `}>
                    <div className="card" onClick={() => {
                      navigate(`/catalogo-prodotti/${prod.id}`),
                      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                      }}>
                      <img src={prod.image} className="card-img-top" alt={prod.name} />
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="col-7 d-flex flex-column justify-content-between">
                           <h4 className="card-title">{prod.name}</h4>
                            <div className="tags mb-0">
                              <span>{prod.category1}</span> <span>{prod.category2}</span>
                            </div>
                          </div>
                          <div className="col-1 d-flex justify-content-center align-items-center py-2"><div className="vr h-70"></div></div>
                          <div className="col-4 d-flex flex-column price-scopri mt-2">
                            <p className="price main-price">{prod.price}</p>
                            <span className="order-link">Scopri ↗</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {!loading && !error && productsData.length > 0 && (
              <div className="carousel-controls align-items-baseline">
                <button className="carousel-btn prev" onClick={scrollPrev} disabled={cardIndex === 0}>‹</button>
                <span className="carousel-page">{currentPage} / {totalPages}</span>
                <button className="carousel-btn next" onClick={scrollNext} disabled={cardIndex === maxIndex}>›</button>
              </div>
            )}

            {!loading && !error && productsData.length > 0 && (
              <div className="carousel-cta text-center">
                 <a
                   href="/catalogo-prodotti"
                   className="link-see-all"
                   onClick={e => {
                     e.preventDefault();
                     navigate('/catalogo-prodotti');
                     setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                   }}
                 >
                   Vedi tutti i prodotti
                 </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;