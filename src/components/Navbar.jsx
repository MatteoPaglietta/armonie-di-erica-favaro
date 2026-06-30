import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

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

  const isNavbarWhite = scrolled || !isHomePage || isOpen;

  const navbarClasses = `navbar fixed-top navbar-expand-lg transition-all duration-300 ${isNavbarWhite ? 'bg-light-navbar navbar-light' : 'bg-transparent navbar-dark'
    }`;

  const navLinkClass = isNavbarWhite ? 'nav-link-dark text-black' : 'nav-link-light text-white';
  const brandClass = isNavbarWhite ? 'text-black' : 'text-white';

  const closeMenu = () => setIsOpen(false);
  const isCatalogPage = location.pathname.startsWith('/catalogo-prodotti');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBrandClick = () => {
    scrollToTop();
    closeMenu();
  };

  return (
    <nav className={navbarClasses} style={{ height: '60px', transition: 'all 0.3s ease' }}>
      <div className={`container-fluid h-100 align-items-center ${isCatalogPage ? "justify-content-center" : "justify-content-between"}`}>
        <Link
          className={`navbar-brand ${brandClass}`}
          to="/"
          style={{ fontFamily: '"Buenard", serif', fontSize: '1.7rem', color: '#a0254e'}}
          onClick={handleBrandClick}
        >
          <span style={{color : isNavbarWhite ? "#a0254e" : "#fff"}}>
            ARMONIE DI ERICA
          </span>

        </Link>
        {!isCatalogPage && (
          <>
            <button
              className={`navbar-toggler custom-toggler ${isOpen ? 'active' : ''}`}
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
              style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
            >
              <div className="navbar-toggler-icon position-relative d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
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
            <div
              className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
              id="navbarNavAltMarkup"
              style={{
                position: isOpen ? 'fixed' : 'relative',
                top: isOpen ? '60px' : 'auto',
                left: 0,
                right: 0,
                maxHeight: isOpen ? 'calc(100vh - 60px)' : 'auto',
                overflowY: isOpen ? 'auto' : 'visible',
                backgroundColor: isOpen ? '#fff7fa' : 'transparent',
                zIndex: 1000
              }}
            >
              <div className="navbar-nav ms-auto text-center">
                <a
                  className={`nav-link ps-0 ps-md-2 ${navLinkClass}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTop();
                    closeMenu();
                  }}
                >
                  Home
                </a>
                <a
                  className={`nav-link ps-0 ps-md-2 ${navLinkClass}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId('pacchetti');
                    closeMenu();
                  }}
                >
                  Pacchetti
                </a>
                {/* <a
                  className={`nav-link ps-0 ps-md-2 ${navLinkClass}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('prodotti')?.scrollIntoView({ behavior: 'smooth' });
                    closeMenu();
                  }}
                >
                  Prodotti
                </a> */}
                <a
                  className={`nav-link ps-0 ps-md-2 mb-2 mb-lg-0 ${navLinkClass}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId('galleria');
                    closeMenu();
                  }}
                >
                  Galleria
                </a>
                <a
                  className="btn btn-hero d-lg-inline-flex align-items-center justify-content-center gap-2 text-nowrap fw-semibold fs-6 px-4 py-2 ms-2 rounded"
                  title="Prenota Ora"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId('prenotazioni');
                    closeMenu();
                  }}
                >
                  Prenota Ora
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;