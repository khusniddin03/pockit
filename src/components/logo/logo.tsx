import { Link } from "react-router-dom";
import "./logo.scss";
import logo from "@/assets/imgs/pockit-logo-black.svg";

export default function Logo(): React.ReactElement {
  return (
    <Link to="/">
      <img src={logo} alt="logo" />
    </Link>
  );
}
