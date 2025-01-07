import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaViber } from "react-icons/fa";

import "./Card.css";

export default function Card() {
  return (
    <div className="card">
      <div className="card__team">
        <div className="card__image-wrapper">
          <div className="card__team-info">
            <p className="card__team-name">Redo</p>

            <div className="card__player">
              <CiFacebook className="card-icon" />
            </div>
            <div className="card__player">
              <CiInstagram className="card-icon" />
            </div>
            <div className="card__player">
              <FaViber className="card-icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="card__team">
        <div className="card__image-wrapper__two">
          <div className="card__team-info">
            <p className="card__team-name">Sam</p>

            <div className="card__player">
              <CiFacebook className="card-icon" />
            </div>
            <div className="card__player">
              <CiInstagram className="card-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
