import "./Button.css";

export default function Button({ children, className, onClick }) {
  const buttonClass = `btn ${className} `;
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}
