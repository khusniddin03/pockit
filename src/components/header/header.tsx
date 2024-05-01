import { Link } from "react-router-dom";
import Logo from "../logo/logo";
import "./header.scss";
import ApplyButton from "../apply-button/apply-button";
import LoginButton from "../login-button/login-button";

export default function Header(): React.ReactElement {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__wrap">
          <div className="header__left">
            <Logo />
            <nav className="navbar">
              <ul className="navbar__list">
                <li className="navbar__item">
                  <Link to="/" className="navbar__link">
                    Card
                  </Link>
                </li>
                <li className="navbar__item">
                  <Link to="/" className="navbar__link">
                    Payments
                  </Link>
                </li>
                <li className="navbar__item">
                  <Link to="/" className="navbar__link">
                    Find cash
                  </Link>
                </li>
                <li className="navbar__item">
                  <Link to="/" className="navbar__link">
                    Credit
                  </Link>
                </li>
                <li className="navbar__item">
                  <Link to="/" className="navbar__link">
                    Plans
                  </Link>
                </li>
                <li className="navbar__item">
                  <Link to="/" className="navbar__link">
                    Company
                  </Link>
                </li>
                <li className="navbar__item">
                  <Link to="/" className="navbar__link">
                    Help
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header__right">
            <ApplyButton>Apply now</ApplyButton>
            <LoginButton>Login</LoginButton>
          </div>
        </div>
      </div>
    </header>
  );
}
