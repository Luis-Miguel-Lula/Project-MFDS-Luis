import "./Input.css";

function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  disabled = false,
  error,
}) {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}

      <input
        className={`input-field ${error ? "input-error" : ""}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />

      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
}

export default Input;
