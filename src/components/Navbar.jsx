import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Verifica se siamo in Home Page
  const isHomePage = location.pathname === '/';

  // Gestione dello Scroll (logica tradotta dal tuo JS)
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gestione classi dinamiche in base a Home/Scroll
  // Se NON siamo in home, la navbar è sempre bianca (stile "scrolled")
  const isNavbarWhite = scrolled || !isHomePage;

  const navbarClasses = `navbar fixed-top navbar-expand-lg transition-all duration-300 ${
    isNavbarWhite ? 'bg-white navbar-light shadow-sm' : 'bg-transparent navbar-dark'
  }`;

  const navLinkClass = isNavbarWhite ? 'nav-link-dark text-black' : 'nav-link-light text-white';
  const brandClass = isNavbarWhite ? 'text-black' : 'text-white';
  const togglerIconColor = isNavbarWhite ? 'bg-black' : 'bg-white';

  // Funzione per chiudere il menu quando si clicca un link
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={navbarClasses} style={{ height: isOpen ? '100vh' : (isNavbarWhite ? '60px' : '80px'), transition: 'all 0.3s ease', overflow: isOpen ? 'scroll' : 'visible' }}>
      <div className="container-fluid h-100 align-items-center">
        
        {/* Logo */}
        <Link 
          className={`navbar-brand ${brandClass}`} 
          to="/" 
          onClick={closeMenu}
          style={{ fontFamily: '"Buenard", serif' }}
        >
          Armonie di Erica
        </Link>

        {/* Toggler Button (Custom Hamburger) */}
        <button 
          className={`navbar-toggler custom-toggler ${isOpen ? 'active' : ''}`} 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
        >
          <div className="navbar-toggler-icon position-relative d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
             {/* Span convertiti per React style dynamic styling */}
             <span style={{ 
               position: 'absolute', width: '100%', height: '3px', borderRadius: '2px', transition: '0.3s ease',
               backgroundColor: isNavbarWhite ? 'black' : 'white',
               top: isOpen ? '12px' : '8px',
               transform: isOpen ? 'rotate(45deg)' : 'none'
             }}></span>
             <span style={{ 
               position: 'absolute', width: '100%', height: '3px', borderRadius: '2px', transition: '0.3s ease',
               backgroundColor: isNavbarWhite ? 'black' : 'white',
               top: isOpen ? '12px' : '16px',
               transform: isOpen ? 'rotate(-45deg)' : 'none'
             }}></span>
          </div>
        </button>

        {/* Menu Links */}
        <div 
          className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} 
          id="navbarNavAltMarkup"
          style={{ 
            backgroundColor: isOpen ? (isNavbarWhite ? 'white' : 'rgba(0,0,0,0.9)') : 'transparent' 
          }}
        >
          <div className="navbar-nav ms-auto text-center">
            {/* Hash Links funzionano solo in Home, altrimenti Route Link */}
            <a className={`nav-link ${navLinkClass}`} href="" onClick={closeMenu}>Home</a>
            <a className={`nav-link ${navLinkClass}`} href="/#pacchetti" onClick={closeMenu}>Pacchetti</a>
            <a className={`nav-link ${navLinkClass}`} href="/#prodotti" onClick={closeMenu}>Prodotti</a>
            <a className={`nav-link ${navLinkClass}`} href="/#galleria" onClick={closeMenu}>Galleria</a>
            <a className={`nav-link ${navLinkClass}`} href="/#team" onClick={closeMenu}>Team</a>
            
            {/* Link Mobile */}
            <a className={`nav-link ${navLinkClass} d-lg-none`} href="/#prenotazioni" onClick={closeMenu}>Prenotazioni</a>
            
            {/* Bottone Desktop */}
            <a 
              className="btn btn-hero d-none d-lg-inline-flex align-items-center justify-content-center gap-2 text-nowrap fw-semibold fs-6 px-4 py-2 ms-2 rounded"
              href="/#prenotazioni"
              title="Prenota Ora"
            >
              Prenota Ora
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;