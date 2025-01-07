import ContactInformation from "../ContactInformation/ContactInformation";

import "./PriceList.css";

export default function PriceList() {
  return (
    <div className="prise-list" id="price list">
      <div className="prise-list__box-title">
        <h2 className="prise-list__title">Price List</h2>
        <p>Starting at $25</p>
      </div>

      <div className="prise-list__wrap-ul-img">
        <ul className="prise-list__wrap-li">
          <li className="prise-list__item">
            <p className="prise-list__service">Haircut</p>
            <div className="prise-list__line-bottom"></div>
            <p className="prise-list__price">$32.00</p>
          </li>
          <li className="prise-list__item">
            <p className="prise-list__service">Beard Trim</p>
            <div className="prise-list__line-bottom"></div>
            <p className="prise-list__price">$26.00</p>
          </li>
          <li className="prise-list__item">
            <p className="prise-list__service">Razor Cut</p>
            <div className="prise-list__line-bottom"></div>
            <p className="prise-list__price">$36.00</p>
          </li>
          <li className="prise-list__item">
            <p className="prise-list__service">Shaves</p>
            <div className="prise-list__line-bottom"></div>
            <p className="prise-list__price">$30.00</p>
          </li>
          <li className="prise-list__item">
            <p className="prise-list__service">Styling / Color</p>
            <div className="prise-list__line-bottom"></div>
            <p className="prise-list__price">$25.00</p>
          </li>
        </ul>
        {/* img */}
        <div className="prise-list__box-img">
          <div className="prise-list__team">
            <div className="prise-list__image-wrapper"></div>
          </div>
        </div>
      </div>

      <ContactInformation />
    </div>
  );
}
