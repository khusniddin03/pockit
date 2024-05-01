import { Link } from "react-router-dom";
import { IFooterDataItem } from "../../types";
import "./footer-item.scss";

interface IProps extends IFooterDataItem {}

export default function FooterItem(props: IProps): React.ReactElement {
  const { title, children } = props;

  return (
    <div className="footer-item">
      <h4 className="footer-item__title">{title}</h4>
      <ul className="footer-item__list">
        {children?.map((child) => (
          <li key={child?.label} className="footer-item__item">
            <Link className="footer-item__link" to={child?.path}>
              {child?.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
