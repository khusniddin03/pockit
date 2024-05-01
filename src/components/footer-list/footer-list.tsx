import type { IFooterDataItem } from "../../types";
import "./footer-list.scss";
import FooterItem from "../footer-item/footer-item";

interface IProps {
  data: IFooterDataItem[];
}

export default function FooterList(props: IProps): React.ReactElement {
  const { data } = props;

  return (
    <div className="footer-list">
      {data?.map((item, index) => <FooterItem key={index} {...item} />)}
    </div>
  );
}
