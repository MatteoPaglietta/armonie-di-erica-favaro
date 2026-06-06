const Header = () => {
  return (
    <header className="header" id="header">
      <video className="header-video video-sm" autoPlay muted loop playsInline>
        <source src="/img/video-header-mobile.mp4" type="video/mp4" />
        Il tuo browser non supporta il video.
      </video>

      <video className="header-video video-lg" autoPlay muted loop playsInline>
        <source src="/img/IMG_1830.mp4" type="video/mp4" />
        Il tuo browser non supporta il video.
      </video>

      <div className="container">
        <div className="row">
          <div className="overlay"></div>
          <figure>
            <picture>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 -10 400 45" preserveAspectRatio="xMidYMid meet">
                <text x="50%" y="75%" textAnchor="middle" fontFamily="Buenard, serif" fontSize="64" fontWeight="700" letterSpacing="4" fill="#ffffff">
                  ARMONIE
                </text>
              </svg>
            </picture>
          </figure>
          
          <p className="text-header z-index-1">Scopri la bellezza che ti rappresenta</p>
          
          <div className="z-index-1 text-center mt-2">
            <a 
              className="btn btn-hero d-inline-flex align-items-center justify-content-center gap-2 text-nowrap fw-semibold fs-6 px-4 py-2 rounded"
              href="#" 
              title="Prenota Ora"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('prenotazioni')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
               Prenota ora
            </a>
          </div>
          
          <div className="d-flex justify-content-center scroll-indicator position-absolute bottom-0 start-50 translate-middle-x mb-4 animate-bounce">
            <div className="mouse-shape d-flex align-items-start justify-content-center p-2 border-color2 rounded-pill">
              <div className="mouse-dot bg-color2 rounded-pill animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;