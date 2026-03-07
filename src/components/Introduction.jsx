function Introduction() {
    return (
        <section className="mt-5" id="main-content">
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
    );
}

export default Introduction;