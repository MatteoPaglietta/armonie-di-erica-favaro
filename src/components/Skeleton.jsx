function Skeleton({ className = '', style = {} }) {
  return <div className={`skeleton ${className}`} style={style} aria-hidden="true"></div>;
}

export const ProductCardSkeleton = () => (
  <div className="card">
    <Skeleton className="card-img-top" style={{ height: 250 }} />
    <div className="card-body">
      <Skeleton className="mb-2" style={{ height: 19, width: '70%', borderRadius: 4 }} />
      <Skeleton style={{ height: 13, width: '50%', borderRadius: 4 }} />
    </div>
  </div>
);

export default Skeleton;
