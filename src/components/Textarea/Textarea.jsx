import "./Textarea.css";

function Textarea({
  label,
  placeholder,
  value,
  onChange,
  rows = 5,
  disabled = false,
}) {
  return (
    <div className="textarea-container">
      {label && <label className="textarea-label">{label}</label>}

      <textarea
        className="textarea-field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        disabled={disabled}
      />
    </div>
  );
}

export default Textarea;
