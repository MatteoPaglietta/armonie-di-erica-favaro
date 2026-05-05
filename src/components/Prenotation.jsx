function Prenotation() {
    return (
        <section className="my-5" id="prenotazioni">
            <div className="container">
                <div className="row mx-prenotazione">
                    <div className="col-12 col-md-6">
                        <img src="/img/immagine-sezione-prenotazione.jpg" alt="Salone Armonie di Erica" className="rounded" style={{ height: "300px", width: "100%" }} />
                    </div>
                    <div className="col-12 col-md-6 text-center pt-4 pt-md-0">
                        <h3 className="title-text">Il tuo nuovo look ti aspetta! Prenota ora</h3>
                        <p className="mt-3"> Vieni a trovarci a Piscina in via Umberto I n° 7. Se invece preferisci scriverci, clicca qui sotto per chattare con noi, richiedere disponibilità o personalizzare il tuo trattamento in tempo reale.
                            La tua bellezza merita una consulenza dedicata e noi siamo disponibili per aiutarti.</p>
                    </div>
                </div>
                <div className="row justify-content-center mt-4 mx-prenotazione">
                    <a className="btn btn-hero d-inline-flex align-items-center justify-content-center gap-2 text-nowrap fw-semibold fs-6 px-4 py-2 rounded"
                        style={{ width: '75%' }} href="https://wa.me/3925372152" target="_blank" rel="noopener noreferrer">
                        Prenota
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Prenotation;
