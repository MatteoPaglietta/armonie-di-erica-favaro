const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-auto" id="footer">
      <div className="container">
        <div className="row text-center text-lg-start gy-4">

          <div className="col-12 col-lg-3" data-aos="fade-up">
            <h3 className="h5 fw-bold mb-3">Armonie di Erica</h3>
            <p className="small mb-3">Dove il benessere incontra l’armonia... e i tuoi capelli prendono vita</p>
            <div className="d-flex justify-content-center justify-content-lg-start gap-3">
              <a href="https://wa.me/3925372152" target="_blank" rel="noopener noreferrer" className="text-light fs-5" title="Contattaci su Whatsapp">
                <i className="bi bi-whatsapp"></i>
                <span className="visually-hidden">Whatsapp</span>
              </a>
              <a href="https://www.instagram.com/armonie_di_erica_favaro/" target="_blank" rel="noopener noreferrer" className="text-light fs-5" title="Seguici su Instagram">
                <i className="bi bi-instagram"></i>
                <span className="visually-hidden">Instagram</span>
              </a>
              <a href="https://www.facebook.com/espertinelleschiariture/" target="_blank" rel="noopener noreferrer" className="text-light fs-5" title="Seguici su Facebook">
                <i className="bi bi-facebook"></i>
                <span className="visually-hidden">Facebook</span>
              </a>
            </div>
          </div>

          <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <h4 className="h6 text-uppercase fw-bold mb-3">Link utili</h4>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a
                  href="#home"
                  title="Vai alla home"
                  className="text-decoration-none text-light"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTop();
                  }}
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#pacchetti"
                  title="Vai ai pacchetti"
                  className="text-decoration-none text-light"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId('pacchetti');
                  }}
                >
                  Pacchetti
                </a>
              </li>
              {/* <li className="mb-2"><a href="/#prodotti" className="text-decoration-none text-light">Prodotti</a></li> */}
              <li className="mb-2">
                <a
                  href="#galleria"
                  title="Vai alla galleria"
                  className="text-decoration-none text-light"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId('galleria');
                  }}
                >
                  Galleria
                </a>
              </li>
              <li>
                <a
                  href="#prenotazioni"
                  title="Vai alle prenotazioni"
                  className="text-decoration-none text-light"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId('prenotazioni');
                  }}
                >
                  Prenotazioni
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
            <h4 className="h6 text-uppercase fw-bold mb-3">Orari</h4>
            <p className="mb-1 small">Mar - Gio - Ven: 9:00 - 18:00</p>
            <p className="mb-1 small">Mercoledì: 14:00 - 20:00</p>
            <p className="mb-1 small">Sabato: 9:00 - 16:00</p>
            <p className="mb-0 small">Dom e Lun: chiuso</p>
          </div>

          <div className="col-12 col-lg-3" data-aos="fade-up" data-aos-delay="300">
            <h4 className="h6 text-uppercase fw-bold mb-3">Contatti</h4>
            <p className="mb-2">
              <i className="bi bi-geo-alt-fill me-2"></i>Via Umberto I 7, Piscina (To)
            </p>
            <p className="mb-2">
              <a href="tel:+393925372152" title="Chiamaci" className="text-decoration-none text-light">
                <i className="bi bi-telephone-fill me-2"></i>392 537 2152
              </a>
            </p>
            <p className="mb-0">
              <a href="mailto:armoniediericafavaro@gmail.com" title="Scrivici una email" className="text-decoration-none text-light">
                <i className="bi bi-envelope-fill me-2"></i>armoniediericafavaro@gmail.com
              </a>
            </p>
          </div>

        </div>

        <hr className="border-top border-light my-4" />

        <div className="text-center small">
          © {currentYear} Armonie di Erica. Tutti i diritti riservati.
          {' '}
          <a
            href="https://www.iubenda.com/privacy-policy/89680577"
            className="iubenda-noiframe iubenda-embed iubenda-nostyle link-privacy"
            title="Privacy Policy"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
