function Packages() {
    return (
        <section className="pacchetti-section mt-2" id="pacchetti">
            <div className="container">
                <div className="row gy-4">
                    <div className="pacchetto-grid">
                        <div className="text-and-button-grid">
                            <h3 className="text-center title-text">Pacchetto sposa</h3>
                            <p className="text-center">Lorem ipsum dolor sit amet...</p>
                            <div className="text-center pb-3"><button className="btn btn-dark">Scopri di più</button></div>
                        </div>
                        <div className="immagine-grid">
                            <div className="pacchetto-img col-12">
                                <img className="img-pacchetto img-fluid rounded" src="/img/immagine-pacchetto-sposa.jpg" alt="Pacchetto Sposa" />
                            </div>
                        </div>
                    </div>

                    <div className="pacchetto-grid">
                        <div className="text-and-button-grid item-1">
                            <h3 className="text-center title-text">Pacchetto Schiaritura</h3>
                            <p className="text-center">Lorem ipsum dolor sit amet...</p>
                            <div className="text-center pb-3"><button className="btn btn-dark">Scopri di più</button></div>
                        </div>
                        <div className="immagine-grid item-2">
                            <div className="pacchetto-img col-12">
                                <img className="img-pacchetto img-fluid rounded" src="/img/immagine-pacchetto-schiariture.png" alt="Pacchetto Schiariture" />
                            </div>
                        </div>
                    </div>

                    <div className="pacchetto-grid">
                        <div className="text-and-button-grid">
                            <h3 className="text-center title-text">Pacchetto Cerimonia</h3>
                            <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam aliquid sit excepturi esse adipisci eos.</p>
                            <div className="text-center pb-3">
                                <button className="btn btn-dark">Scopri di più</button>
                            </div>
                        </div>
                        <div className="immagine-grid">
                            <div className="pacchetto-img col-12">
                                <img className="img-pacchetto img-fluid rounded" src="img/immagine-pacchetto-schiariture.png" alt="Pacchetto Cerimonia" />
                            </div>
                        </div>
                    </div>

                    <div className="pacchetto-grid">
                        <div className="text-and-button-grid item-1">
                            <h3 className="text-center title-text">Pacchetto Stiratura alla Cheratina</h3>
                            <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam aliquid sit excepturi esse adipisci eos.</p>
                            <div className="text-center pb-3">
                                <button className="btn btn-dark">Scopri di più</button>
                            </div>
                        </div>
                        <div className="immagine-grid item-2">
                            <div className="pacchetto-img col-12">
                                <img className="img-pacchetto img-fluid rounded" src="img/immagine-pacchetto-sposa.jpg" alt="Pacchetto Stiratura alla Cheratina" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Packages;
