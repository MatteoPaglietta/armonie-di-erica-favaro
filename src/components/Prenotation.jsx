function Prenotation() {
    return (
        <section className="my-5" id="prenotazioni">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="bg-prenotazioni"></div>
                    </div>
                    <div className="col-12 col-md-6 text-center pt-4 pt-md-0">
                        <h3 className="title-text">Prenota ora il tuo servizio</h3>
                        <p>Lorem ipsum dolor sit amet...</p>
                    </div>
                </div>
                <div className="row justify-content-center mt-4">
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
