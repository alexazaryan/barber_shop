import Button from "../Button/Button";
import Circle from "../Circle/Circle";

import "./RightSection.css";

export default function RightSection({ onScrollToSection }) {
  return (
    <>
      <div id="home" className="right-section">
        <div className="right-section__box" id="home">
          <ul className="right-section__barber-shop">
            <li className="right-section__title">Barber Shop</li>
            <li className="right-section__description">
              Get the most professional haircut for you
            </li>
            <li className="right-section__buttons">
              <Button
                className="right-section__button-first"
                onClick={() => onScrollToSection("our story")}
              >
                About Us
              </Button>
              <Button
                className="right-section__button-two"
                onClick={() => onScrollToSection("services")}
              >
                What we do
              </Button>
            </li>
          </ul>

          <div>
            <Circle onScrollToSection={onScrollToSection}/>
          </div>
        </div>
      </div>
    </>
  );
}
