function Team() {
    return (
        <section className="mt-4" id="team">
            <div className="container">
                <h3 className="title-text text-center mb-3">Il nostro Team</h3>
                <div className="row">
                    <div className="col-12 col-lg-6 d-flex flex-column flex-md-row flex-lg-column align-items-center pb-md-2 pb-lg-0">
                        <div className="col"><img src="/img/immagine-erica.png" alt="Erica" style={{ width: '100%' }} /></div>
                        <div className="col">
                            <div className="text-center text-md-start text-lg-center mt-3">
                                <h3>Erica</h3>
                                <h4 className="h5 small color-cat">MANAGER</h4>
                                <p>Descrizione di Erica...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex flex-column flex-md-row flex-lg-column align-items-center pb-md-2 pb-lg-0">
                        <div className="col"><img src="/img/immagine-vanessa.png" alt="Vanessa" style={{ width: '100%' }} /></div>
                        <div className="col">
                            <div className="text-center text-md-start text-lg-center mt-3">
                                <h3>Vanessa</h3>
                                <h4 className="h5 small color-cat">PARRUCCHIERA</h4>
                                <p>Descrizione di Vanessa...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;
