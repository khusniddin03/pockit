import Container from "../container/container";
import img from "../../assets/imgs/security.png";
import "./support.scss";
import { SUPPORT_DATA } from "./support-data";
import SupportCard from "../support-card/support-card";

export default function Support(): React.ReactElement {
  return (
    <section className="support">
      <Container>
        <img className="support__img" src={img} alt="support-security" />
        <h3 className="support__title">Security and support you can trust</h3>
        <div className="support__list">
          {SUPPORT_DATA?.map((support, index) => (
            <SupportCard {...support} key={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
