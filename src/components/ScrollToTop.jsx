import { useEffect, useState } from 'react';

function ScrollToTop() {
    const [showScroll, setShowScroll] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const footer = document.getElementById('footer');
            const footerTop = footer ? footer.offsetTop : document.body.scrollHeight;

            setShowScroll(scrollY > 300);

            if (scrollY + window.innerHeight >= footerTop) {
                setIsBlocked(true);
            } else {
                setIsBlocked(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <a href="#"
            className={`scroll-to-top ${isBlocked ? 'blocked' : ''}`}
            style={{ display: showScroll ? 'block' : 'none', position: isBlocked ? 'absolute' : 'fixed' }}
            onClick={scrollToTop}
            title="Torna su">
            <i className="bi bi-chevron-up"></i>
        </a>

    );
}

export default ScrollToTop;
