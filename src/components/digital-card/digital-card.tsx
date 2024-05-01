import { IDigitalCardItem } from "@/types";
import "./digital-card.scss";

interface IProps extends IDigitalCardItem {}

export default function DigitalCard(props: IProps): React.ReactElement {
  const { image, title } = props;

  return (
    <div className="digital-card">
      <img src={image} alt="" className="digital-card__img" />
      <p className="digital-card__title">{title}</p>
    </div>
  );
}
