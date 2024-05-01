import { Link } from "react-router-dom";
import footerCardImg from "@/assets/imgs/pockit-app.svg";
import qrCode from "@/assets/imgs/footer-app-qr.svg";
import appStore from "@/assets/imgs/download-on-the-app-store-apple-logo-svgrepo-com-1.svg";
import googlePlay from "@/assets/imgs/google-play-badge-logo-svgrepo-com-1.svg";
import "./footer-card.scss";

export default function FooterCard(): React.ReactElement {
  return (
    <div className="footer-card">
      <img className="footer-card__img" src={footerCardImg} alt="footer-card" />
      <div className="footer-card__description">
        <h4 className="footer-card__title">Get the Pockit app</h4>
        <p className="footer-card__text">
          Download the Pockit app on your iPhone or Android device.
        </p>
      </div>
      <div className="footer-card__links">
        <Link to="/">
          <img className="footer-card__code" src={appStore} alt="footer-card" />
        </Link>
        <Link to="/">
          <img
            className="footer-card__code"
            src={googlePlay}
            alt="footer-card"
          />
        </Link>
      </div>
      <img className="footer-card__code" src={qrCode} alt="footer-card" />
    </div>
  );
}
