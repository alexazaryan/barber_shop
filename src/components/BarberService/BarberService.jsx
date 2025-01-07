import Button from "../Button/Button";

import "./BarberService.css";

export default function BarberService() {
  return (
    <div id="services">
      <h2 className="barber-service__title">Services</h2>
      <div className="barber-service-wrap">
        <div className="barber-service-box barber-service-box__one">
          <div className="barber-service__box-line">
            <ul className="barber-service__box-li">
              <li>Hair cut</li>
              <li>
                <Button className="barber-service__btn">$36.00</Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="barber-service-box barber-service-box__two">
          <div className="barber-service__box-line">
            <ul className="barber-service__box-li">
              <li>Washing</li>
              <li>
                <Button className="barber-service__btn">$32.00</Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="barber-service-box barber-service-box__three">
          <div className="barber-service__box-line">
            <ul className="barber-service__box-li">
              <li>Shaves</li>
              <li>
                <Button className="barber-service__btn">$30.00</Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="barber-service-box barber-service-box__four">
          <div className="barber-service__box-line">
            <ul className="barber-service__box-li">
              <li>Kids</li>
              <li>
                <Button className="barber-service__btn">$25.00</Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
