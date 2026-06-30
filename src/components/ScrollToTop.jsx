import { useEffect, useRef, useState } from 'react';

function ScrollToTop() {
    const [showScroll, setShowScroll] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);
    const tickingRef = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (tickingRef.current) return;
            tickingRef.current = true;
            requestAnimationFrame(() => {
                setShowScroll(window.scrollY > 300);
                tickingRef.current = false;
            });
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const footer = document.getElementById('footer');
        if (!footer) return;
        const observer = new IntersectionObserver(([entry]) => setIsBlocked(entry.isIntersecting));
        observer.observe(footer);
        return () => observer.disconnect();
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
