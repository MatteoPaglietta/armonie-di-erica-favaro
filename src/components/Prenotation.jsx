import LazyImage from './LazyImage';

function Prenotation() {
    return (
        <section className="my-5" id="prenotazioni">
            <div className="container">
                <div className="row mx-prenotazione">
                    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center" data-aos="fade-up">
                        <LazyImage
                            avif="/img/immagine-sezione-prenotazione.avif"
                            webp="/img/immagine-sezione-prenotazione.webp"
                            src="/img/immagine-sezione-prenotazione.jpg"
                            alt="Salone Armonie di Erica"
                            className="rounded"
                            width="1000"
                            height="750"
                            pictureStyle={{ width: '100%', height: '300px' }}
                            imgStyle={{ height: '300px', width: '100%', maxWidth: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <div className="col-12 col-md-6 text-center pt-4 pt-md-0 d-flex flex-column justify-content-center align-items-center" data-aos="fade-up">
                        <h2 className="title-text">Il tuo nuovo look ti aspetta! Prenota ora</h2>
                        <p className="mt-3 fs-5"> Vieni a trovarci a Piscina in via Umberto I n° 7. Se invece preferisci scriverci, clicca qui sotto per chattare con noi, richiedere disponibilità o personalizzare il tuo trattamento in tempo reale.
                            La tua bellezza merita una consulenza dedicata e noi siamo disponibili per aiutarti.</p>
                    </div>
                </div>
                <div className="row justify-content-center mt-4 mx-prenotazione" data-aos="fade-up">
                    <a className="btn btn-hero d-inline-flex align-items-center justify-content-center gap-2 text-nowrap fw-semibold fs-6 px-4 py-2 rounded"
                        style={{ width: '75%' }} href="https://wa.me/3925372152" target="_blank" rel="noopener noreferrer" title="Prenota il tuo appuntamento su Whatsapp">
                        Prenota
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Prenotation;
