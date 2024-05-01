import { useState } from "react";
import "./faq-accardion-item.scss";
import ArrowDown from "../arrow-down/arrow-down";
import { IFaqAccardionItem } from "@/types";

interface IProps extends IFaqAccardionItem {
  index: number;
}

export default function FaqAccardionItem(props: IProps): React.ReactElement {
  const { content, question, index } = props;
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="faq-accardion-item">
      <button
        onClick={() => setOpen((p) => !p)}
        className="faq-accardion-item__button"
      >
        <span className="faq-accardion-item__title">
          {index + 1}. {question}
        </span>
        <span className={`faq-accardion-item__icon${open ? " open" : ""}`}>
          <ArrowDown />
        </span>
      </button>
      <div className={`faq-accardion-item__content${open ? " open" : ""}`}>
        <div className="content">
          <div className="faq-accardion-item__divider"></div>
          {content}
        </div>
      </div>
    </div>
  );
}
