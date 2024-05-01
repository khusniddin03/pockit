import { Link } from "react-router-dom";
import "./apply-link.scss";

interface IProps {
  to: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
}

export default function ApplyLink(
  props: React.PropsWithChildren<IProps>,
): React.ReactElement {
  const { children, target, to } = props;

  return (
    <Link target={target} to={to} className="apply-link">
      {children}
    </Link>
  );
}
