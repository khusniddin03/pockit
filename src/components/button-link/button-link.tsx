import { Link } from "react-router-dom";
import "./button-link.scss";

interface IProps {
  to: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
}

export default function ButtonLink(
  props: React.PropsWithChildren<IProps>,
): React.ReactElement {
  const { children, to, target } = props;

  return (
    <Link to={to} target={target} className="button-link">
      {children}
    </Link>
  );
}
