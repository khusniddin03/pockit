import "./button.scss";

interface IProps {
  onClick?: () => void;
}

export default function Button(
  props: React.PropsWithChildren<IProps>,
): React.ReactElement {
  const { children, onClick } = props;

  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
