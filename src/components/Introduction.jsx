function Introduction() {
    return (
        <section className="mt-5" id="main-content">
            <div className="container">
                <h1 className="text-center testo-main" data-aos="fade-up">Armonie di Erica salone di bellezza al passo con il tuo stile</h1>
                <h2 className="text-center text-main-content" data-aos="fade-up" data-aos-delay="100">Specialisti nelle schiariture naturali e cura del benessere delle nostre clienti, con uno stile moderno e personalizzato</h2>

                <div className="features-section container mt-4">
                    <div className="row justify-content-center g-4">
                        <div className="col-12 col-md-4">
                            <div className="feature" data-aos="fade-up" data-aos-delay="0">
                                <div className="feature-icon"><i className="bi bi-heart-fill"></i></div>
                                <p className="feature-title">Passione</p>
                                <p className="feature-text">Amore per la bellezza in ogni dettaglio.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="feature" data-aos="fade-up" data-aos-delay="150">
                                <div className="feature-icon"><i className="bi bi-stars"></i></div>
                                <p className="feature-title">Qualità</p>
                                <p className="feature-text">Prodotti premium e trattamenti esclusivi.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="feature" data-aos="fade-up" data-aos-delay="300">
                                <div className="feature-icon"><i className="bi bi-person-badge-fill"></i></div>
                                <p className="feature-title">Esperienza</p>
                                <p className="feature-text">Professionisti certificati al tuo servizio.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-center text-main-content mt-4 fs-3" data-aos="fade-up">
                    Da anni nel cuore di Piscina, in via Umberto I, accompagniamo le nostre clienti in un percorso di bellezza su misura: dalla consulenza iniziale alla scelta della tecnica più adatta, fino alla cura quotidiana dei capelli dopo il trattamento.
                </p>
            </div>
        </section>
    );
}

export default Introduction;