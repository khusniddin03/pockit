import "./apply-button.scss";

interface IProps {
  onClick?: () => void;
}

export default function ApplyButton(
  props: React.PropsWithChildren<IProps>,
): React.ReactElement {
  const { children, onClick } = props;

  return (
    <button className="apply-button" onClick={onClick}>
      {children}
    </button>
  );
}
