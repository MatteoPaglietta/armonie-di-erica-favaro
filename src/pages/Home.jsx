import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ProductCarousel from '../components/ProductCarousel';
import PhotoGallery from '../components/PhotoGallery';

const Home = () => {
    
  // Logica Scroll To Top
  const [showScroll, setShowScroll] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const footer = document.getElementById('footer'); // Assicurati di avere un footer con questo ID
        const footerTop = footer ? footer.offsetTop : document.body.scrollHeight;
        
        setShowScroll(scrollY > 300);

        // Blocco sopra il footer
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
    <main id="main">
      <Header />

      {/* SECTION 1: MAIN TEXT & FEATURES */}
      <section className="my-5" id="main-content">
        <div className="container">
            <h1 className="text-center testo-main">Armonie di Erica salone di bellezza al passo con il tuo stile</h1>
            <h2 className="text-center text-main-content">Specialisti nelle schiariture naturali e cura del benessere delle nostre clienti, con uno stile moderno e personalizzato</h2>

            <div className="features-section container mt-4">
                <div className="row justify-content-center g-4">
                    <div className="col-12 col-md-4">
                        <div className="feature">
                            <div className="feature-icon"><i className="bi bi-heart-fill"></i></div>
                            <p className="feature-title">Passione</p>
                            <p className="feature-text">Amore per la bellezza in ogni dettaglio.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="feature">
                            <div className="feature-icon"><i className="bi bi-stars"></i></div>
                            <p className="feature-title">Qualità</p>
                            <p className="feature-text">Prodotti premium e trattamenti esclusivi.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="feature">
                            <div className="feature-icon"><i className="bi bi-person-badge-fill"></i></div>
                            <p className="feature-title">Esperienza</p>
                            <p className="feature-text">Professionisti certificati al tuo servizio.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 2: PACCHETTI */}
      <section className="pacchetti-section mt-5" id="pacchetti">
         <div className="container">
             <div className="row gy-4">
                 {/* Pacchetto Sposa */}
                 <div className="pacchetto-grid">
                     <div className="text-and-button-grid">
                         <h3 className="text-center title-text">Pacchetto sposa</h3>
                         <p className="text-center">Lorem ipsum dolor sit amet...</p>
                         <div className="text-center pb-3"><button className="btn btn-dark">Scopri di più</button></div>
                     </div>
                     <div className="immagine-grid">
                         <div className="pacchetto-img col-12">
                             <img className="img-pacchetto img-fluid rounded" src="/img/immagine-pacchetto-sposa.jpg" alt="Pacchetto Sposa" />
                         </div>
                     </div>
                 </div>
                 
                 {/* Pacchetto Schiaritura (Invertito) */}
                 <div className="pacchetto-grid">
                     <div className="text-and-button-grid item-1">
                         <h3 className="text-center title-text">Pacchetto Schiaritura</h3>
                         <p className="text-center">Lorem ipsum dolor sit amet...</p>
                         <div className="text-center pb-3"><button className="btn btn-dark">Scopri di più</button></div>
                     </div>
                     <div className="immagine-grid item-2">
                         <div className="pacchetto-img col-12">
                             <img className="img-pacchetto img-fluid rounded" src="/img/immagine-pacchetto-schiariture.png" alt="Pacchetto Schiariture" />
                         </div>
                     </div>
                 </div>
                 {/* Altri pacchetti qui se necessari... */}
             </div>
         </div>
      </section>

      {/* SECTION 3: PRODOTTI (React Component) */}
      <ProductCarousel />

      {/* SECTION 4: GALLERIA (React Component) */}
      <PhotoGallery />

      {/* SECTION 5: TEAM */}
      <section className="mb-5" id="team">
        <div className="container">
            <h3 className="title-text text-center mb-3">Il nostro Team</h3>
            <div className="row">
                <div className="col-12 col-lg-6 d-flex flex-column flex-md-row flex-lg-column align-items-center pb-md-2 pb-lg-0">
                    <div className="col"><img src="/img/immagine-erica.png" alt="Erica" style={{width: '100%'}}/></div>
                    <div className="col">
                        <div className="text-center text-md-start text-lg-center mt-3">
                            <h3>Erica</h3>
                            <h4 className="h5 small color-cat">MANAGER</h4>
                            <p>Descrizione di Erica...</p>
                        </div>
                    </div>
                </div>
                {/* Ripeti per Vanessa */}
                 <div className="col-12 col-lg-6 d-flex flex-column flex-md-row flex-lg-column align-items-center pb-md-2 pb-lg-0">
                    <div className="col"><img src="/img/immagine-vanessa.png" alt="Vanessa" style={{width: '100%'}}/></div>
                    <div className="col">
                        <div className="text-center text-md-start text-lg-center mt-3">
                            <h3>Vanessa</h3>
                            <h4 className="h5 small color-cat">PARRUCCHIERA</h4>
                            <p>Descrizione di Vanessa...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 6: PRENOTAZIONI */}
      <section className="my-5" id="prenotazioni">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="bg-prenotazioni"></div>
                </div>
                <div className="col-12 col-md-6 text-center pt-4 pt-md-0">
                    <h3 className="title-text">Prenota ora il tuo servizio</h3>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
            </div>
            <div className="row justify-content-center pt-2">
                <a className="btn btn-hero d-inline-flex align-items-center justify-content-center gap-2 text-nowrap fw-semibold fs-6 px-4 py-2 rounded"
                   style={{width: '75%'}} href="https://wa.me/3925372152" target="_blank" rel="noopener noreferrer">
                   Prenota
                </a>
            </div>
        </div>
      </section>

      {/* SCROLL TO TOP */}
      <a href="#" 
         className={`scroll-to-top ${isBlocked ? 'blocked' : ''}`} 
         style={{ display: showScroll ? 'block' : 'none', position: isBlocked ? 'absolute' : 'fixed' }}
         onClick={scrollToTop}
         title="Torna su">
         <i className="bi bi-chevron-up"></i>
      </a>

    </main>
  );
};

export default Home;