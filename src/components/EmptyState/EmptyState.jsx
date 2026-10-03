import "./EmptyState.css";

function EmptyState({
  title = "Nada encontrado",
  description = "Não há informações para exibir.",
  action,
}) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon" aria-hidden="true">
        ○
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      {action && <div className="empty-state-action">{action}</div>}
    </div>
  );
}

export default EmptyState;
