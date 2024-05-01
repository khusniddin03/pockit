import heroLeftImg from "@/assets/imgs/pockit-card-2.svg";
import heroRightImg from "@/assets/imgs/pockit-app-p-500.png";
import logo1 from "@/assets/imgs/number_of_customers.svg";
import logo2 from "@/assets/imgs/card_payment_2.svg";
import logo3 from "@/assets/imgs/spectator_1.svg";
import logo4 from "@/assets/imgs/bbc_black.svg";
import Button from "../button/button";
import { Link } from "react-router-dom";
import appStore from "@/assets/imgs/download-on-the-app-store-apple-logo-svgrepo-com-1.svg";
import googlePlay from "@/assets/imgs/google-play-badge-logo-svgrepo-com-1.svg";
import "./hero.scss";

export default function Hero(): React.ReactElement {
  return (
    <section className="hero">
      <div className="hero__wrap">
        <img
          src={heroLeftImg}
          alt="hero-left-image"
          className="hero__left-img"
        />
        <div className="hero__center">
          <h1 className="hero__title">
            Get a prepaid account in 3 minutes. No credit checks.
          </h1>
          <ul className="hero__list">
            <li className="hero__item">✓ Instant Prepaid Mastercard®</li>
            <li className="hero__item">✓ Apple Pay and Google Pay™</li>
            <li className="hero__item">✓ Salary or benefits paid early</li>
          </ul>
          <ul className="hero__list hero__logos">
            <li className="hero__item">
              <img src={logo1} alt="hero-logo" className="hero__item-img" />
            </li>
            <li className="hero__item">
              <img src={logo2} alt="hero-logo" className="hero__item-img" />
            </li>
            <li className="hero__item">
              <img src={logo3} alt="hero-logo" className="hero__item-img" />
            </li>
            <li className="hero__item">
              <img src={logo4} alt="hero-logo" className="hero__item-img" />
            </li>
          </ul>
          <div className="hero__apply">
            <Button>Apply now</Button>
            <div className="hero__download-links">
              <Link to="/">
                <img
                  className="hero__download-link"
                  src={appStore}
                  alt="hero__download-links"
                />
              </Link>
              <Link to="/">
                <img
                  className="hero__download-link"
                  src={googlePlay}
                  alt="hero__download-links"
                />
              </Link>
            </div>
          </div>
          <p className="hero__bottom">
            Rated <strong> 4.1 ★ &nbsp;</strong> by <strong>31,097+ </strong>{" "}
            reviews
          </p>
        </div>
        <img
          src={heroRightImg}
          alt="hero-right-image"
          className="hero__right-img"
        />
      </div>
    </section>
  );
}
