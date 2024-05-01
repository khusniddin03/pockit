import { INavItem } from "@/types";
import { Link } from "react-router-dom";
import "./navbar.scss";
import NavbarSublist from "../navbar-sublist/navbar-sublist";
import ArrowDown from "../arrow-down/arrow-down";

interface IProps {
  data: INavItem[];
}

export default function Navbar(props: IProps): React.ReactElement {
  const { data } = props;

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {data?.map((nav, index) => (
          <li key={index} className="navbar__item">
            <Link to={nav?.path} className="navbar__link">
              {nav?.label}
            </Link>
            {nav?.children?.length && (
              <>
                <div className="navbar__icon">
                  <ArrowDown />
                </div>
                <NavbarSublist data={nav?.children ?? []} />
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
