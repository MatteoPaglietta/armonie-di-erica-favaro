import { useEffect, useRef, useState } from 'react';
import { getImage } from '../api/api';
import Skeleton from './Skeleton';

const PhotoGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const trackRef = useRef(null);
  const [selectedImg, setSelectedImg] = useState(null);

  async function loadImage(){
    setLoading(true);
    setError('');
    try{
      const data = await getImage();
      setImages(data);
    } catch(err){
      setError(err.message);
    } finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
    loadImage();
  },[]);

  
  useEffect(() => {
    if (loading || error || images.length === 0) return;

    const track = trackRef.current;
    if (!track) return;

    const grids = track.querySelectorAll(':scope > .photo-grid');
    if (grids.length < 2) return;

    const unitWidth = grids[1].offsetLeft - grids[0].offsetLeft;
    if (!unitWidth) return;

    let currentX = 0;
    let speed = window.innerWidth < 991 ? 1.5 : 2;
    let animationId;

    const loopScroll = () => {
      currentX -= speed;
      if (currentX <= -unitWidth) {
        currentX += unitWidth;
      }
      track.style.transform = `translateX(${currentX}px)`;
      animationId = requestAnimationFrame(loopScroll);
    };

    animationId = requestAnimationFrame(loopScroll);

    return () => cancelAnimationFrame(animationId);
  }, [loading, error, images]);

  return (
    <>
      <section className="photo-carousel mt-5" id="galleria" data-aos="fade-up">
        {loading && (
            <div className="photo-grid" style={{ display: 'grid', gridAutoFlow: 'dense', gridTemplateColumns: 'repeat(10, 150px)', gridTemplateRows: 'repeat(3, 150px)', gap: '1rem' }}>
                {Array.from({ length: 20 }).map((_, index) => (
                    <Skeleton key={index} style={{ width: '100%', height: '100%' }} />
                ))}
            </div>
        )}
        {!loading && !error && (
            <div className="carousel-track" ref={trackRef} style={{ display: 'flex', width: 'max-content', gap: '1rem' }}>
                {[0, 1, 2].map((loopKey) => (
                    <div key={loopKey} className="photo-grid" style={{ display: 'grid', gridAutoFlow: 'dense', gridTemplateColumns: 'repeat(10, 150px)', gridTemplateRows: 'repeat(3, 150px)', gap: '1rem' }}>
                        {images.map((image, index) => {
                            const i = index + 1;
                            const style = {};
                            if([2, 10, 7, 12, 18, 20, 17].includes(i)) style.gridColumn = 'span 2';
                            if([4, 6, 14].includes(i)) style.gridRow = 'span 2';

                            return (
                                <img
                                    key={image.id}
                                    src={image.image}
                                    alt={image.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', ...style }}
                                    onClick={() => setSelectedImg(image.image)}
                                    className="cursor-pointer"
                                />
                            );
                        })}
                    </div>
                ))}
            </div>
        )}
      </section>

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