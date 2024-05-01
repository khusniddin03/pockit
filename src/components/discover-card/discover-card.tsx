import { IDiscoverCardItem } from "@/types";
import ButtonLink from "../button-link/button-link";
import "./discover-card.scss";

interface IProps extends IDiscoverCardItem {}

export default function DiscoverCard(props: IProps): React.ReactElement {
  const { icon, title, list, type } = props;

  return (
    <div className="discover-card">
      <div className="discover-card__icon">{icon}</div>
      <h4 className={`discover-card__title ${type}`}>{title}</h4>
      <ul className="discover-card__list">
        {list?.map((item, index) => (
          <li key={index} className="discover-card__item">
            {item?.title}
          </li>
        ))}
      </ul>
      <div className="discover-card__button">
        <ButtonLink to="/">Apply now</ButtonLink>
      </div>
    </div>
  );
}
