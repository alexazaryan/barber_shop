import Button from "../Button/Button";

import Card from "../Card/Card";

import "./BestBarbers.css";

export default function BestBarbers() {
  return (
    <>
      <div id="our-story" className="bb-wrap">
        <ul className="bb-wrap__list">
          <li className="bb-wrap__item bb-wrap__item--title">
            Best hairdressers
          </li>
          <li className="bb-wrap__item bb-wrap__item--description">
            Gentlemen's Barber Shop is new Bootstrap v5 HTML CSS template by
            TemplateMo for everyone. There is a sidebar menu to navigate the
            one-page layout. You can feel free to adapt this template for your
            business.
          </li>
          <li className="bb-wrap__item bb-wrap__item--line"></li>
          <li className="bb-wrap__item--meet">Meet Babers</li>
          <li>
            <Card />
          </li>
        </ul>
        <ul className="bb-wrap__box">
          <li className="bb-wrap__discount">Get 32% Discount</li>
          <li className="bb-wrap__text">on every second week of the month</li>
          <li>
            <Button className="bb-wrap__btn">Promo Code: BarBerMo</Button>
          </li>
        </ul>
      </div>
    </>
  );
}
