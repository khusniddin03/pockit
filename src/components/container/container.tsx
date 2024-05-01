import "./container.scss";

export default function Container({
  children,
}: React.PropsWithChildren): React.ReactElement {
  return <div className="container">{children}</div>;
}
