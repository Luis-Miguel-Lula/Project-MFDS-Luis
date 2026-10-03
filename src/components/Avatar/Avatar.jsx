import "./Avatar.css";

function Avatar({ src, alt = "Avatar", name = "U" }) {
  return src ? (
    <img className="avatar" src={src} alt={alt} />
  ) : (
    <div className="avatar avatar-placeholder">
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

export default Avatar;
