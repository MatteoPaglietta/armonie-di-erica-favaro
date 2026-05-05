const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-auto" id="footer">
      <div className="container">
        <div className="row text-center text-md-start">

          <div className="col-md-4 mb-4 text-center">
            <h5 className="fw-bold">Armonie di Erica</h5>
            <p className="small">Dove il benessere incontra l’armonia del corpo e della mente.</p>
          </div>
          <div className="col-md-4 mb-4 text-center">
            <h6 className="text-uppercase fw-bold mb-3">Link utili</h6>
            <ul className="list-unstyled">

              <li><a href="/#homepage" className="text-decoration-none text-light">Home</a></li>
              <li><a href="/#pacchetti" className="text-decoration-none text-light">Pacchetti</a></li>
              <li><a href="/#prodotti" className="text-decoration-none text-light">Prodotti</a></li>
              <li><a href="/#galleria" className="text-decoration-none text-light">Galleria</a></li>
              <li><a href="/#prenotazioni" className="text-decoration-none text-light">Prenotazioni</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4 text-center">
            <h6 className="text-uppercase fw-bold mb-3">Orari di apertura</h6>
            <p className="mb-1">Mar - Gio - Ven: 9:00 - 18:00</p>
            <p className="mb-1">Mercoledì: 15:00 - 21:00</p>
            <p className="mb-1">Sabato: 9:00 - 16:00</p>
            <p className="mb-3">Domenica e Lunedì: Chiuso</p>
            <p><i className="bi bi-geo-alt-fill me-2"></i>Via Umberto I 7, Piscina (To)</p>
          </div>

        </div>

        <hr className="border-top border-light" />
        
        <div className="row align-items-center">
          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end order-md-2">
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="https://wa.me/3925372152" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
                <i className="bi bi-whatsapp" title="Contattaci su Whatsapp"></i>
                <span className="visually-hidden">Whatsapp</span>
              </a>

              <a href="https://instagram.com/armonie_di_erica_" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
                <i className="bi bi-instagram" title="Seguici su Instagram"></i>
                <span className="visually-hidden">Instagram</span>
              </a>

              <a href="https://facebook.com/share/19LtJ4aRER/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-light fs-4" title="Seguici su Facebook">
                <i className="bi bi-facebook"></i>
                <span className="visually-hidden">Facebook</span>
              </a>

              <a href="mailto:armoniediericafavaro@gmail.com" rel="noopener noreferrer" title="Scrivici alla mail" className="text-light me-3 fs-4">
                <i className="bi bi-envelope-fill"></i>
                <span className="visually-hidden">Email</span>
              </a>
            </div>
          </div>

          <div className="col-12 col-md-6 text-center text-md-start small mt-3 mt-md-0">
             © {currentYear} Armonie di Erica. Tutti i diritti riservati.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;