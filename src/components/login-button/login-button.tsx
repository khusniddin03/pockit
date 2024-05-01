import "./login-button.scss";

interface IProps {
  onClick?: () => void;
}

export default function LoginButton(
  props: React.PropsWithChildren<IProps>,
): React.ReactElement {
  const { children, onClick } = props;

  return (
    <button className="login-button" onClick={onClick}>
      {children}
    </button>
  );
}
