import LazyImage from './LazyImage';

function Packages() {
    return (
        <section className="pacchetti-section" id="pacchetti">
            <div className="container">
                <div className="d-none d-md-block">
                    <h2 className="text-center title-text pt-5" data-aos="fade-up">I Nostri Pacchetti</h2>
                    <p className="text-center text-main-content mt-3 fs-3" data-aos="fade-up" data-aos-delay="100">
                        Dalle schiariture naturali alla cura quotidiana dei capelli, fino ai look per i tuoi giorni più speciali: ogni pacchetto nasce da un consulto personalizzato e si adatta alla tua base, al tuo stile e alle tue esigenze.
                    </p>
                </div>
                <div className="row gy-4 pacchetti">
                    <div className="pacchetto-grid mt-5" data-aos="fade-up">
                        <div className="text-and-button-grid">
                            <h3 className="text-center title-text">Un Look da Favola, per il tuo giorno</h3>
                            <p className="h4 text-center mt-3 text-main-content">Il giorno del "sì" merita una preparazione impeccabile: Make-up Professionale e Piega Haute Couture per valorizzarti e durare per tutta la giornata. Ogni sposa è unica, quindi il pacchetto è completamente personalizzabile.</p>
                            <div className="text-center mt-3 mb-3 mb-md-0"><a className="btn btn-hero" href="https://wa.me/3925372152" target="_blank" rel="noopener noreferrer" title="Scopri di più sul pacchetto Sposa">Scopri di più</a></div>
                        </div>
                        <div className="immagine-grid">
                            <LazyImage
                                avif="/img/immagine-pacchetto-sposa.avif"
                                webp="/img/immagine-pacchetto-sposa.webp"
                                src="/img/immagine-pacchetto-sposa.jpg"
                                alt="Pacchetto Sposa"
                                width="1200"
                                height="800"
                                className="img-pacchetto img-fluid rounded"
                            />
                        </div>
                    </div>

                    <div className="pacchetto-grid mt-0 mt-md-5" data-aos="fade-up">
                        <div className="text-and-button-grid item-1">
                            <h3 className="text-center title-text">Luce Su Misura: Il Tuo Biondo Ideale</h3>
                            <p className="h4 text-center mt-3 text-main-content">Vuoi un effetto baciato dal sole tutto l'anno? Il nostro pacchetto schiaritura usa tecniche avanzate per creare sfumature naturali e luminose, capaci di valorizzare il viso e dare profondità alla chioma. Ogni base è diversa, per questo il trattamento è modulabile e personalizzabile.</p>
                            <div className="text-center mt-3 mb-3 mb-md-0"><a className="btn btn-hero" href="https://wa.me/3925372152" target="_blank" rel="noopener noreferrer" title="Scopri di più sul pacchetto Schiariture">Scopri di più</a></div>
                        </div>
                        <div className="immagine-grid item-2">
                            <LazyImage
                                avif="/img/immagine-pacchetto-schiariture.avif"
                                webp="/img/immagine-pacchetto-schiariture.webp"
                                src="/img/immagine-pacchetto-schiariture.jpg"
                                alt="Pacchetto Schiariture"
                                width="1200"
                                height="1618"
                                className="img-pacchetto img-fluid rounded"
                            />
                        </div>
                    </div>

                    <div className="pacchetto-grid mt-0 mt-md-5" data-aos="fade-up">
                        <div className="text-and-button-grid">
                            <h3 className="text-center title-text">Il Tuo Look da Invitata Perfetta</h3>
                            <p className="h4 text-center mt-3 text-main-content">Per un giorno speciale serve un look all'altezza: abbiamo creato un pacchetto per invitate e familiari che desiderano un risultato curato e raffinato. Anche questa proposta è totalmente personalizzabile in base al tuo stile.</p>
                            <div className="text-center mt-3 mb-3 mb-md-0">
                                <a className="btn btn-hero" href="https://wa.me/3925372152" target="_blank" rel="noopener noreferrer" title="Scopri di più sul pacchetto Invitata">Scopri di più</a>
                            </div>
                        </div>
                        <div className="immagine-grid">
                            <LazyImage
                                avif="/img/immagine-pacchetto-invitata.avif"
                                webp="/img/immagine-pacchetto-invitata.webp"
                                src="/img/immagine-pacchetto-invitata.jpg"
                                alt="Pacchetto Cerimonia"
                                width="960"
                                height="1280"
                                className="img-pacchetto img-fluid rounded"
                            />
                        </div>
                    </div>

                    <div className="pacchetto-grid mt-0 mt-md-5" data-aos="fade-up">
                        <div className="text-and-button-grid item-1">
                            <h3 className="text-center title-text">Addio Crespo, Benvenuta Libertà</h3>
                            <p className="h4 text-center mt-3 text-main-content">Dimentica piastra e tempi lunghi: il nostro Trattamento alla Cheratina rende i capelli lisci, setosi e più facili da gestire ogni giorno. Il pacchetto base include trattamento e piega finish, con possibilità di personalizzare l'esperienza in base alle tue esigenze.</p>
                            <div className="text-center mt-3 mb-3 mb-md-0">
                                <a className="btn btn-hero" href="https://wa.me/3925372152" target="_blank" rel="noopener noreferrer" title="Scopri di più sul pacchetto Stiratura alla Cheratina">Scopri di più</a>
                            </div>
                        </div>
                        <div className="immagine-grid item-2">
                            <LazyImage
                                avif="/img/immagine-pacchetto-stiratura.avif"
                                webp="/img/immagine-pacchetto-stiratura.webp"
                                src="/img/immagine-pacchetto-stiratura.jpg"
                                alt="Pacchetto Stiratura alla Cheratina"
                                width="960"
                                height="962"
                                className="img-pacchetto img-fluid rounded"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Packages;
