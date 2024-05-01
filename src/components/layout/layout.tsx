import "./layout.scss";

export default function Layout(
  props: React.PropsWithChildren,
): React.ReactElement {
  const { children } = props;

  return <div className="layout">{children}</div>;
}
