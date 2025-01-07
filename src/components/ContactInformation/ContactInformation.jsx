import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaViber } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { LuTwitter } from "react-icons/lu";

import { PiLockKeyOpen } from "react-icons/pi";

import "./ContactInformation.css";

export default function ContactInformation() {
  return (
    <div className="contact-information">
      <div className="contact-information__title">Say hello</div>

      {/* left */}
      <div className="contact-information__wrap">
        <div className="contact-information__details">
          <ul className="contact-information__list">
            <li className="contact-information__list-item">
              Contact Information
            </li>
            <li className="contact-information__list-item">
              (+49) 120-240-3600
            </li>
            <li className="contact-information__list-item">
              hello@barber.beauty
            </li>
            <li>
              <ul className="contact-information__image-list">
                <li className="contact-information__image-item">
                  <CiFacebook className="card-icon" />
                </li>
                <li className="contact-information__image-item">
                  <CiInstagram className="card-icon" />
                </li>
                <li className="contact-information__image-item">
                  <FaViber className="card-icon" />
                </li>
                <li className="contact-information__image-item">
                  <CiYoutube className="card-icon" />
                </li>
                <li className="contact-information__image-item">
                  <LuTwitter className="card-icon" />
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* right */}
        <div className="contact-information__other">
          <div className="contact-information__other-wrapper">
            <div className="contact-information__other-inner">
              <div className="contact-information__other-content">
                <ul className="contact-information__other-list">
                  <li className="contact-information__one">
                    <PiLockKeyOpen className="contact-information__img"/>
                  </li>
                  <li className="contact-information__two">
                    Open Daily
                  </li>
                  <li className="contact-information__three">
                    10:00 AM - 8:00 PM
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
