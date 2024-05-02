import "./main.scss";

export default function Main({
  children,
}: React.PropsWithChildren): React.ReactElement {
  return <main className="main">{children}</main>;
}
