import Container from "../container/container";
import FaqAccardion from "../faq-accardion/faq-accardion";
import { FAQ_DATA } from "./faq-data";
import "./faq.scss";

export default function Faq(): React.ReactElement {
  return (
    <section className="faq">
      <Container>
        <h3 className="faq__title">Frequently asked questions</h3>
        <FaqAccardion data={FAQ_DATA} />
      </Container>
    </section>
  );
}
