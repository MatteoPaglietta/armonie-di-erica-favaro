import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="not-found-section position-relative d-flex flex-column align-items-center justify-content-center text-center px-3 overflow-hidden">
            <div className="not-found-bg" aria-hidden="true"></div>
            <div className="position-relative z-index-1">
                <h1 className="not-found-number" aria-label="404">404</h1>
                <h2 className="h4 fw-bold text-uppercase mb-3" data-aos="fade-up">Pagina non trovata</h2>
                <p className="text-main-content mb-4" data-aos="fade-up" data-aos-delay="100">
                    La pagina che stai cercando non esiste o è stata spostata.
                </p>
                <Link
                    to="/"
                    className="btn btn-hero d-inline-flex align-items-center justify-content-center gap-2 text-nowrap fw-semibold fs-6 px-4 py-2 rounded-pill"
                    title="Torna alla home"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Torna alla home
                </Link>
            </div>
        </section>
    );
};

export default NotFound;
