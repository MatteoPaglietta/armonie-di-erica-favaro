import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// 1. DATABASE SIMULATO (In un progetto reale questo starebbe in un file separato o verrebbe da un'API)
const productsData = [
  {
    id: 'prodotto1',
    name: 'Shampoo Rivitalizzante Argan & Karité',
    price: '€ 14.90',
    description: 'Formula potenziata con olio di Argan e burro di Karité. Idrata in profondità e ripara le fibre capillari danneggiate, donando lucentezza e morbidezza senza appesantire. Ideale per capelli secchi e sfibrati.',
    features: [
      'Nutrimento Intenso',
      'Senza Parabeni e Siliconi',
      'Fragranza Naturale Ipoallergenica'
    ],
    image: '/img/prodotto.png',
    category: 'Hair Care'
  },
  // Generiamo altri prodotti finti per far funzionare i "Prodotti Correlati"
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `prodotto${i + 2}`,
    name: `Prodotto Correlato ${i + 1}`,
    price: '€ 12.50',
    description: 'Descrizione generica del prodotto...',
    features: ['Caratteristica 1', 'Caratteristica 2'],
    image: '/img/prodotto.png',
    category: 'Hair Care'
  }))
];

const ProductDetail = () => {
  const { id } = useParams(); // Prende l'ID dall'URL (es. 'prodotto1')
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  // 2. LOGICA DI CARICAMENTO DATI (Simula il JS che cambiava i contenuti)
  useEffect(() => {
    // Trova il prodotto corrente
    const currentProduct = productsData.find(p => p.id === id);
    
    if (currentProduct) {
      setProduct(currentProduct);
      
      // Logica Prodotti Correlati: Prendi 3 prodotti che NON sono quello attuale
      const related = productsData
        .filter(p => p.id !== id)
        .slice(0, 3);
      setRelatedProducts(related);
    } else {
      // Se il prodotto non esiste, torna al catalogo (opzionale)
      // navigate('/catalogo-prodotti');
    }
    
    // Scrolla in alto quando cambia il prodotto (importante quando clicchi sui correlati)
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
  }, [id, navigate]);

  if (!product) return <div className="text-center mt-5 pt-5">Caricamento...</div>;

  return (
    <section className="product-detail animate-fade-in" style={{ paddingTop: '100px' }}>
      <div className="container py-5">
        
        {/* TASTO INDIETRO (Sostituisce il JS back-to-main) */}
        <div 
          className="back-to-main mb-4 d-inline-flex align-items-center cursor-pointer" 
          onClick={() => navigate('/catalogo-prodotti')}
          style={{ cursor: 'pointer' }}
        >
          <i className="bi bi-arrow-left me-2" style={{ fontSize: '1.2rem' }}></i>
          <span>Torna al Catalogo</span>
        </div>

        {/* DETTAGLIO PRINCIPALE */}
        <div className="row">
          {/* Colonna Immagine */}
          <div className="col-md-6 mb-4 img-dettaglio">
            <img 
              src={product.image} 
              alt={product.name}
              className="card-img-top rounded shadow-sm immagine-dettaglio"
              style={{ objectFit: 'contain', maxHeight: '500px' }} 
            />
          </div>

          {/* Colonna Testo */}
          <div className="col-md-6">
            <h1 className="display-5 fw-bold mb-3">{product.name}</h1>
            <h3 className="mb-4 color-logo">{product.price}</h3>

            <p className="lead text-muted">
              {product.description}
            </p>

            <h4 className="mt-5 mb-3">Caratteristiche Principali</h4>
            <ul className="list-unstyled">
              {product.features.map((feature, index) => (
                <li key={index} className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Whatsapp */}
            <div className="row justify-content-center mt-5">
              <a 
                className="btn btn-hero d-inline-flex align-items-center justify-content-center gap-2 text-nowrap fw-semibold fs-6 px-4 py-2 rounded"
                style={{ width: '75%' }} 
                href="https://wa.me/3925372152" 
                title="Chiedi informazioni" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp"></i> Richiedi Informazioni
              </a>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* PRODOTTI CORRELATI DINAMICI */}
        <h3 className="mb-4 text-center">Prodotti Correlati</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {relatedProducts.map((related) => (
            <div className="col" key={related.id}>
              <div 
                className="card col-48 h-100 shadow-sm border-0" 
                onClick={() => navigate(`/catalogo-prodotti/${related.id}`)}
                style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }}
              >
                <img 
                    src={related.image} 
                    className="card-img-top p-3" 
                    alt={related.name} 
                    style={{ height: '250px', objectFit: 'contain' }}
                />
                <div className="card-body d-flex flex-column">
                  <div className="mb-auto">
                    <h4 className="card-title fs-5">{related.name}</h4>
                    <div className="tags mb-2">
                      <span className="badge bg-light text-dark border me-1">Hair Care</span>
                      <span className="badge bg-light text-dark border">Bio</span>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center price-order">
                    <p className="price mb-0 fw-bold">{related.price}</p>
                    <span className="order-link text-decoration-none" style={{ color: '#830932' }}>Scopri ↗</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductDetail;