import "./SearchInput.css";

function SearchInput({ value, onChange, placeholder = "Pesquisar..." }) {
  return (
    <div className="search-container">
      <span className="search-icon" aria-hidden="true">
        ⌕
      </span>

      <input
        className="search-input"
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </div>
  );
}

export default SearchInput;
