import { useState } from "react";
import Logo from "../logo/logo";
import LoginLink from "../login-link/login-link";
import ApplyLink from "../apply-link/apply-link";
import Navbar from "../navbar/navbar";
import { NAVBAR_ITEMS } from "./header-data";
import "./header.scss";
import MenuIcon from "../menu-icon/menu-icon";
import MobileMenu from "../mobile-menu/mobile-menu";

export default function Header(): React.ReactElement {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
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

            <button
              onClick={() => setActive((p) => !p)}
              className="header__burger-btn"
            >
              <MenuIcon active={active} />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu active={active} setActive={setActive} />
    </>
  );
}
