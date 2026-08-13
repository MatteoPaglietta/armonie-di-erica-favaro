import { useEffect } from 'react';

const ELFSIGHT_SCRIPT_SRC = 'https://elfsightcdn.com/platform.js';

function Reviews() {
    useEffect(() => {
        if (document.querySelector(`script[src="${ELFSIGHT_SCRIPT_SRC}"]`)) return;
        const script = document.createElement('script');
        script.src = ELFSIGHT_SCRIPT_SRC;
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <section className="mt-5" id="recensioni">
            <div className="container">
                <h2 className="text-center title-text" data-aos="fade-up">Dicono di noi</h2>
                <p className="text-center text-main-content mt-3 mb-4 fs-3" data-aos="fade-up" data-aos-delay="100">
                    Le parole delle nostre clienti sono la nostra soddisfazione più grande.
                </p>
                <div data-aos="fade-up" data-aos-delay="150">
                    <div className="elfsight-app-d4e493ba-ea0b-4e94-8bda-78c8b56c7587" data-elfsight-app-lazy></div>
                </div>
            </div>
        </section>
    );
}

export default Reviews;
