import Container from "../container/container";
import img from "@/assets/imgs/pockit-card-2.svg";
import logo1 from "@/assets/imgs/number_of_customers.svg";
import logo2 from "@/assets/imgs/card_payment_2.svg";
import logo3 from "@/assets/imgs/spectator_1.svg";
import logo4 from "@/assets/imgs/bbc_black.svg";
import ButtonLink from "../button-link/button-link";
import { Link } from "react-router-dom";
import appStore from "@/assets/imgs/download-on-the-app-store-apple-logo-svgrepo-com-1.svg";
import googlePlay from "@/assets/imgs/google-play-badge-logo-svgrepo-com-1.svg";
import "./customers.scss";

export default function Customers(): React.ReactElement {
  return (
    <section className="customers">
      <Container>
        <img src={img} alt="customers-image" className="customers__img" />
        <h3 className="customers__title">Join 900,000+ happy customers</h3>
        <ul className="customers__list">
          <li className="customers__item">✓ Instant Prepaid Mastercard®</li>
          <li className="customers__item">✓ Apple Pay and Google Pay™</li>
          <li className="customers__item">✓ Salary or benefits paid early</li>
        </ul>
        <ul className="customers__list customers__logos">
          <li className="customers__item">
            <img
              src={logo1}
              alt="customers-logo"
              className="customers__item-img"
            />
          </li>
          <li className="customers__item">
            <img
              src={logo2}
              alt="customers-logo"
              className="customers__item-img"
            />
          </li>
          <li className="customers__item">
            <img
              src={logo3}
              alt="customers-logo"
              className="customers__item-img"
            />
          </li>
          <li className="customers__item">
            <img
              src={logo4}
              alt="customers-logo"
              className="customers__item-img"
            />
          </li>
        </ul>
        <div className="customers__apply">
          <ButtonLink to="/">Apply now</ButtonLink>
          <div className="customers__download-links">
            <Link to="/">
              <img
                className="customers__download-link"
                src={appStore}
                alt="customers__download-links"
              />
            </Link>
            <Link to="/">
              <img
                className="customers__download-link"
                src={googlePlay}
                alt="customers__download-links"
              />
            </Link>
          </div>
        </div>
        <p className="customers__bottom">
          Rated <strong> 4.1 ★ &nbsp;</strong> by <strong>31,097+ </strong>{" "}
          reviews
        </p>
      </Container>
    </section>
  );
}
