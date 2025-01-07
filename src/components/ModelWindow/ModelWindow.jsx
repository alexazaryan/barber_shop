import "./ModelWindow.css";

export default function ModelWindow({
  menuItems,
  onScrollToSection,
  handleClick,
}) {
  return (
    <div>
      <div className="menu-content">
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="nav-item"
              onClick={() => {
                handleClick();
                onScrollToSection(item.id);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
