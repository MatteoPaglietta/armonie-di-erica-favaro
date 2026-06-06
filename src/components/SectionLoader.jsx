function SectionLoader({ label = 'Caricamento in corso...' }) {
  return (
    <div className="section-loader" role="status" aria-live="polite" aria-busy="true">
      <div className="spinner-border" aria-hidden="true"></div>
      <p className="section-loader-text mb-0">{label}</p>
    </div>
  );
}

export default SectionLoader;
