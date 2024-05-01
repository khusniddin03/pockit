import type { ISupportCardItem } from "@/types";
import "./support-card.scss";

interface IProps extends ISupportCardItem {}

export default function SupportCard(props: IProps): React.ReactElement {
  const { description, icon, image, title } = props;

  return (
    <div className="support-card">
      <img src={image} alt="card-image" className="support-card__img" />
      <p className="support-card__icon">{icon}</p>
      <h4 className="support-card__title">{title}</h4>
      <p className="support-card__description">{description}</p>
    </div>
  );
}
