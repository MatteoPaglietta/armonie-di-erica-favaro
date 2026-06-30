import { useState } from 'react';
import Skeleton from './Skeleton';

function LazyImage({
  avif,
  webp,
  src,
  alt,
  width,
  height,
  className = '',
  pictureStyle = {},
  imgStyle = {},
  ...imgProps
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <picture style={{ position: 'relative', display: 'block', ...pictureStyle }}>
      {!loaded && (
        <Skeleton style={{ position: 'absolute', inset: 0, borderRadius: 0 }} />
      )}
      {avif && <source srcSet={avif} type="image/avif" />}
      {webp && <source srcSet={webp} type="image/webp" />}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className={className}
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.3s ease', ...imgStyle }}
        onLoad={() => setLoaded(true)}
        {...imgProps}
      />
    </picture>
  );
}

export default LazyImage;
