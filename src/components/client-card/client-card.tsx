import type { IClientCardItem } from "@/types";
import rate from "@/assets/imgs/stars-rating.svg";
import "./client-card.scss";

interface IProps extends IClientCardItem {}

export default function ClientCard(props: IProps): React.ReactElement {
  const { date, image, message, name } = props;

  return (
    <div className="client-card">
      <img src={image} alt="profile" className="client-card__img" />
      <img src={rate} alt="rates" className="client-card__rate" />
      <p className="client-card__message">{message}</p>
      <p className="client-card__name">{name}</p>
      <p className="client-card__date">{date}</p>
    </div>
  );
}
