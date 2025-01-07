import { IoArrowUpCircleOutline } from "react-icons/io5";

import "./Footer.css";

export default function Footer({ onScrollToSection }) {
  return (
    <footer className="footer" id="contact">
      <div>
        <h3 className="footer__title">Our Branches</h3>

        <div className="footer__locations">
          {/* 1 */}
          <ul className="footer__list">
            <li className="footer__list-item footer__list-item__sd">
              Grünberger
            </li>
            <li className="footer__list-item">
              Grünberger Str. 31, 10245 Berlin,
            </li>
            <li className="footer__list-item">Germany</li>
          </ul>

          {/* 2 */}
          <ul className="footer__list">
            <li className="footer__list-item footer__list-item__sd">
              Behrenstraße
            </li>
            <li className="footer__list-item">
              Behrenstraße 27, 10117 Berlin,
            </li>
            <li className="footer__list-item">Germany</li>
          </ul>

          {/* 3 */}
          <ul className="footer__list">
            <li className="footer__list-item footer__list-item__sd">
              Weinbergsweg
            </li>
            <li className="footer__list-item">
              Weinbergsweg 23, 10119 Berlin,
            </li>
            <li className="footer__list-item">Germany</li>
          </ul>
        </div>
      </div>

      <div className="footer__copyright">
        <>
          <p className="footer__text">
            Copyright © 2036 Barber Shop - Design:
            <a className="footer__link" href="#">
              TemplateMo
            </a>
          </p>
        </>
        <div
          className="footer__image"
          onClick={() => onScrollToSection("home")}
        >
          <IoArrowUpCircleOutline className="IoArrowUpCircleOutline" />
        </div>
      </div>
    </footer>
  );
}
