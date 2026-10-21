import "./AdCard.css";

function AdCard({ title, description, onDismiss }) {
  return (
    <aside className="ad-card" aria-label="Publicidade">
      <div className="ad-card__header">
        <span className="ad-card__label">Publicidade</span>

        {onDismiss && (
          <button
            type="button"
            className="ad-card__dismiss"
            onClick={onDismiss}
            aria-label="Ocultar anúncio"
          >
            Ocultar
          </button>
        )}
      </div>

      <h2 className="ad-card__title">{title}</h2>

      <p className="ad-card__description">{description}</p>
    </aside>
  );
}

export default AdCard;
