import "./ProgressBar.css";

function ProgressBar({ value = 0 }) {
  const progress = Math.min(100, Math.max(0, value));

  return (
    <div
      className="progress-container"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div className="progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
}

export default ProgressBar;
