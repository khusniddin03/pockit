import Logo from "../logo/logo";
import LoginLink from "../login-link/login-link";
import ApplyLink from "../apply-link/apply-link";
import Navbar from "../navbar/navbar";
import { NAVBAR_ITEMS } from "./header-data";
import "./header.scss";
import MenuIcon from "../menu-icon/menu-icon";

export default function Header(): React.ReactElement {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__wrap">
          <div className="header__left">
            <Logo />
            <Navbar data={NAVBAR_ITEMS} />
          </div>

          <div className="header__right">
            <ApplyLink to="/">Apply now</ApplyLink>
            <LoginLink to="/">Login</LoginLink>
          </div>

          <button className="header__burger-btn">
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
