import { Link } from "react-router-dom";
import "./login-link.scss";

interface IProps {
  to: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
}

export default function LoginButton(
  props: React.PropsWithChildren<IProps>,
): React.ReactElement {
  const { children, to, target } = props;

  return (
    <Link to={to} target={target} className="login-link">
      {children}
    </Link>
  );
}
