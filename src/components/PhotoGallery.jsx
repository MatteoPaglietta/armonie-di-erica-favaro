import React, { useEffect, useRef, useState } from 'react';

// Lista immagini (simulata, usa i tuoi path)
const images = [
    '/img/immagine-erica.png', '/img/immagine-header.jpg', '/img/immagine-pacchetto-schiariture.png',
    '/img/immagine-pacchetto-sposa.jpg', '/img/immagine-sezione-prenotazione.jpg', '/img/immagine-sonia.png',
    '/img/immagine-vanessa.png', '/img/immagine-erica.png', '/img/immagine-header.jpg',
    '/img/immagine-pacchetto-schiariture.png', '/img/immagine-pacchetto-sposa.jpg', '/img/immagine-sezione-prenotazione.jpg',
    '/img/immagine-sonia.png', '/img/immagine-vanessa.png', '/img/immagine-header.jpg',
    '/img/immagine-pacchetto-schiariture.png', '/img/immagine-pacchetto-sposa.jpg', '/img/immagine-sezione-prenotazione.jpg',
    '/img/immagine-sonia.png', '/img/immagine-vanessa.png'
];

const PhotoGallery = () => {
  const trackRef = useRef(null);
  const [selectedImg, setSelectedImg] = useState(null);
  
  // Logica Scroll Infinito
  useEffect(() => {
    const track = trackRef.current;
    let currentX = 0;
    let speed = window.innerWidth < 991 ? 1.5 : 2;
    let animationId;

    const loopScroll = () => {
      currentX -= speed;
      // Reset quando ha scrollato metà del contenuto (perché abbiamo duplicato le immagini)
      if (Math.abs(currentX) >= track.scrollWidth / 2) {
        currentX = 0;
      }
      track.style.transform = `translateX(${currentX}px)`;
      animationId = requestAnimationFrame(loopScroll);
    };

    animationId = requestAnimationFrame(loopScroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <>
      <section className="photo-carousel my-5" id="galleria">
        <div className="carousel-track" ref={trackRef} style={{ display: 'flex', width: 'max-content' }}>
            {/* Renderizziamo due volte la griglia per l'effetto loop infinito */}
            {[0, 1].map((loopKey) => (
                <div key={loopKey} className="photo-grid" style={{ display: 'grid', gridAutoFlow: 'dense', gridTemplateColumns: 'repeat(10, 150px)', gridTemplateRows: 'repeat(3, 150px)', gap: '1rem', marginRight: '1rem' }}>
                    {images.map((src, index) => {
                        // Classi per il layout a griglia irregolare (logic from your css)
                        let gridClass = '';
                        const i = index + 1;
                        if ([2, 10, 7, 12, 18, 20, 17].includes(i)) gridClass = 'span-col-2'; // mapping css .img-2 etc -> span 2 cols
                        if ([4, 6, 14].includes(i)) gridClass = 'span-row-2'; 
                        
                        // Stili inline per simulare il tuo CSS grid specifico
                        const style = {};
                        if([2, 10, 7, 12, 18, 20, 17].includes(i)) style.gridColumn = 'span 2';
                        if([4, 6, 14].includes(i)) style.gridRow = 'span 2';

                        return (
                            <img 
                                key={`${loopKey}-${index}`} 
                                src={src} 
                                alt={`Galleria ${index}`} 
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', ...style }}
                                onClick={() => setSelectedImg(src)}
                                className="cursor-pointer"
                            />
                        );
                    })}
                </div>
            ))}
        </div>
      </section>

      {/* Modale */}
      {selectedImg && (
        <div className="image-modal active" onClick={() => setSelectedImg(null)}>
          <span className="close-modal">&times;</span>
          <img className="modal-content" src={selectedImg} alt="Full screen" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
};

export default PhotoGallery;