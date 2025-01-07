import Button from "../Button/Button";

import "./Circle.css";

export default function Circle({ onScrollToSection }) {
  return (
    <>
      <div className="circle-section">
        <div className="circle-small"></div>
        <ul className="circle-title__box">
          <li className="circle-title">Hurry Up!</li>
          <li className="circle-title">Get good</li>
          <li className="circle-title">haircut.</li>
        </ul>
        <Button
          className={"btn circle-section-button"}
          onClick={() => onScrollToSection("price list")}
        >
          Book a seat
        </Button>
      </div>
    </>
  );
}
