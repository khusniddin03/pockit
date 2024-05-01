import "./main.scss";

export default function Main({
  children,
}: React.PropsWithChildren): React.ReactElement {
  return <div className="main">{children}</div>;
}
