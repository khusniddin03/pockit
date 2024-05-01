import type { IFaqAccardionItem } from "@/types";
import "./faq-accardion.scss";
import FaqAccardionItem from "../faq-accardion-item/faq-accardion-item";

interface IProps {
  data: IFaqAccardionItem[];
}

export default function FaqAccardion(props: IProps): React.ReactElement {
  const { data } = props;

  return (
    <div className="faq-accardion">
      {data?.map((faq, index) => (
        <FaqAccardionItem {...faq} key={index} index={index} />
      ))}
    </div>
  );
}
