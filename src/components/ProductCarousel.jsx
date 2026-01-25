import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const productsData = [
  { id: 'prodotto1', name: 'Shampoo Revitalizzante', price: '€14,50', img: '/img/prodotto.png' },
  { id: 'prodotto2', name: 'Maschera Nutriente', price: '€18,00', img: '/img/prodotto.png' },
  { id: 'prodotto3', name: 'Olio di Argan', price: '€22,50', img: '/img/prodotto.png' },
  { id: 'prodotto4', name: 'Spray Volumizzante', price: '€12,00', img: '/img/prodotto.png' },
  { id: 'prodotto5', name: 'Crema Ricci', price: '€16,50', img: '/img/prodotto.png' },
  { id: 'prodotto6', name: 'Gel Fissante', price: '€10,00', img: '/img/prodotto.png' },
];

const ProductCarousel = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  // Calcola quante card sono visibili (Logica del tuo JS)
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

  // Gestione Paginazione (1/6 etc)
  const totalPages = window.innerWidth >= 768 ? 4 : 6;
  const maxIndex = Math.max(0, productsData.length - visibleCards);
  const currentPage = maxIndex === 0 ? 1 : Math.min(totalPages, Math.round((cardIndex / maxIndex) * (totalPages - 1)) + 1);

  // Navigazione
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

  // Scroll effettivo (Side Effect)
  useEffect(() => {
    if (scrollRef.current) {
        // Troviamo la card corrispondente all'indice
        const cards = scrollRef.current.querySelectorAll('.card-wrapper');
        if (cards[cardIndex]) {
            cards[cardIndex].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
        }
    }
  }, [cardIndex]);

  // Gestione Swipe Touch
  const touchStart = useRef(0);
  const handleTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const delta = touchStart.current - touchEnd;
    if (Math.abs(delta) > 50) { // Soglia minima swipe
      if (delta > 0) scrollNext();
      else scrollPrev();
    }
  };

  return (
    <section className="mb-5" id="prodotti">
      <div className="container">
        <div className="row">
          <div className="carousel-container">
            {/* Track Wrapper */}
            <div 
                className="carousel-track-wrapper" 
                ref={scrollRef}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
              <div className="carousel-track">
                {productsData.map((prod, index) => (
                  <div key={prod.id} className="col-9 col-md-5 col-lg-32 card-wrapper">
                    <div className="card" onClick={() => navigate(`/catalogo-prodotti/${prod.id}`)}>
                      <img src={prod.img} className="card-img-top" alt={prod.name} />
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="col-7">
                            <h4 className="card-title">{prod.name}</h4>
                            <div className="tags mb-2">
                              <span>Categoria1</span> <span>Categoria2</span>
                            </div>
                          </div>
                          <div className="col-1 text-end"><div className="vr h-90"></div></div>
                          <div className="col-4 price-scopri mt-2">
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

            {/* Controlli */}
            <div className="carousel-controls align-items-baseline">
              <button className="carousel-btn prev" onClick={scrollPrev} disabled={cardIndex === 0}>‹</button>
              <span className="carousel-page">{currentPage} / {totalPages}</span>
              <button className="carousel-btn next" onClick={scrollNext} disabled={cardIndex === maxIndex}>›</button>
            </div>

            {/* CTA */}
            <div className="carousel-cta text-center">
               <Link to="/catalogo-prodotti" className="link-see-all">Vedi tutti i prodotti</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;