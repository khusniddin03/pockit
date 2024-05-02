import { useEffect } from "react";
import "./mobile-menu.scss";
import { NAVBAR_ITEMS } from "../header/header-data";
import MobileNavItem from "../mobile-nav-item/mobile-nav-item";

interface Props {
  active: boolean;
  setActive: (active: boolean) => void;
}

const MobileMenu = ({ active, setActive }: Props) => {
  useEffect(() => {
    function escapeClose(event: KeyboardEvent) {
      if (event.code === "Escape") {
        setActive(false);
      }
    }
    window.addEventListener("keyup", escapeClose);

    return () => window.removeEventListener("keyup", escapeClose);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (active) {
      document.body.dataset.scrollDisable = "true";
    } else {
      document.body.dataset.scrollDisable = "false";
    }
  }, [active]);

  return (
    <div
      className={`mobile-burger ${active ? "active" : ""}`}
      onClick={() => setActive(false)}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="mobile-burger__panel"
      >
        <div className="mobile-burger__body">
          <ul className="mobile-burger__list list-style-none">
            {NAVBAR_ITEMS?.map((nav, index) => (
              <MobileNavItem key={index} setActive={setActive} {...nav} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
