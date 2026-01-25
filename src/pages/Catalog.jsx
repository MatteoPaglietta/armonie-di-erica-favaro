import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Catalog = () => {
  const navigate = useNavigate();
  
  // STATO PER IL PULSANTE SCROLL TO TOP
  const [showScroll, setShowScroll] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);

  // Generiamo 30 prodotti finti per simulare il tuo HTML
  // In futuro questi dati arriveranno da un database o un file JSON
  const products = Array.from({ length: 30 }, (_, i) => ({
    id: `prodotto${i + 1}`,
    name: 'Shampoo Revitalizzante',
    category1: 'Categoria1',
    category2: 'Categoria2',
    price: '€14,50',
    image: '/img/prodotto.png'
  }));

  // LOGICA SCROLL (Uguale a quella della Home, ma specifica per questa pagina)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const footer = document.getElementById('footer');
      const footerTop = footer ? footer.offsetTop : document.body.scrollHeight;

      // Mostra pulsante dopo 300px
      setShowScroll(scrollY > 300);

      // Blocca il pulsante prima che tocchi il footer
      if (scrollY + window.innerHeight >= footerTop) {
        setIsBlocked(true);
      } else {
        setIsBlocked(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="all-products" className="animate-fade-in" style={{ paddingTop: '80px' }}>
      <div className="container py-5">
        
        {/* TASTO TORNA ALLA HOME */}
        <div className="pb-2 cursor-pointer" id="back-to-main2" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
            <i className="bi bi-arrow-left me-2" style={{ fontSize: '1.2rem' }}></i>
            <span>Torna alla Home</span>
        </div>

        {/* TITOLO */}
        <h3 className="text-center fw-normal p-2 mb-4">
          Scopri tutti i <span className="fst-italic fs-1">prodotti</span> presenti
          in negozio, i <span className="fst-italic">prezzi </span> e le loro <span className="fst-italic">
            funzioni</span>!
        </h3>

        {/* GRIGLIA PRODOTTI */}
        <div className="row justify-content-around row-all-product">
          {products.map((product) => (
            <div key={product.id} className="card col-48" onClick={() => navigate(`/catalogo-prodotti/${product.id}`)}>
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
                    {/* Usiamo span o button perché l'intera card è cliccabile grazie all'onClick sul div padre */}
                    <span className="order-link">Scopri ↗</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PULSANTE SCROLL TO TOP */}
      <a 
        href="#" 
        className={`scroll-to-top-products ${isBlocked ? 'blocked' : ''}`} 
        title="Torna su"
        style={{ display: showScroll ? 'block' : 'none', position: isBlocked ? 'absolute' : 'fixed' }}
        onClick={scrollToTop}
      >
        <i className="bi bi-chevron-up"></i>
      </a>
    </section>
  );
};

export default Catalog;