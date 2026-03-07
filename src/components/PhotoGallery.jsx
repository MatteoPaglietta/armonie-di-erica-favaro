import { useEffect, useRef, useState } from 'react';
import { getImage } from '../api/api';

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
    const track = trackRef.current;
    let currentX = 0;
    let speed = window.innerWidth < 991 ? 1.5 : 2;
    let animationId;

    const loopScroll = () => {
      currentX -= speed;
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
      <section className="photo-carousel mt-5" id="galleria">
        <div className="carousel-track" ref={trackRef} style={{ display: 'flex', width: 'max-content' }}>
            {[0, 1].map((loopKey) => (
                <div key={loopKey} className="photo-grid" style={{ display: 'grid', gridAutoFlow: 'dense', gridTemplateColumns: 'repeat(10, 150px)', gridTemplateRows: 'repeat(3, 150px)', gap: '1rem' }}>
                    {!loading && !error && images.map((image, index) => {
                        let gridClass = '';
                        const i = index + 1;
                        if ([2, 10, 7, 12, 18, 20, 17].includes(i)) gridClass = 'span-col-2'; 
                        if ([4, 6, 14].includes(i)) gridClass = 'span-row-2'; 
                        
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