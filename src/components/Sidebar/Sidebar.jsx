import { useState, useEffect } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./Sidebar.css";

export default function Sidebar({ onScrollToSection }) {
  const [activeItem, setActiveItem] = useState("home");
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 880);

  const menuItems = [
    { name: "HOME", id: "home" },
    { name: "OUR STORY", id: "our-story" },
    { name: "SERVICES", id: "services" },
    { name: "PRICE LIST", id: "price list" },
    { name: "CONTACT", id: "contact" },
  ];

  // Отслеживаем изменение ширины окна
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 880);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Проверяем положение каждого блока на экране
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Проверяем, находится ли блок в центре видимой области
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveItem(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuItems]);

  return (
    <>
      {isMobileView ? (
        <BurgerMenu
          menuItems={menuItems}
          onScrollToSection={onScrollToSection}
        />
      ) : (
        <div className="navbar">
          <div className="navbar__logo">
            <img className="navbar__logo-img" src="./logo.png" alt="logo" />
          </div>

          <ul className="nav-list">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`nav-item ${activeItem === item.id ? "active" : ""}`}
                onClick={() => onScrollToSection(item.id)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
