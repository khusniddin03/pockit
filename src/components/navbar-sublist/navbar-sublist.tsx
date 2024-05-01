import { INavItem } from "@/types";
import { Link } from "react-router-dom";
import "./navbar-sublist.scss";

interface IProps {
  data: INavItem[];
}

export default function NavbarSublist(props: IProps): React.ReactElement {
  const { data } = props;

  return (
    <ul className="navbar-sublist">
      {data?.map((nav, index) => (
        <li key={index}>
          <Link to={nav?.path} className="navbar-sublist__link">
            {nav?.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
