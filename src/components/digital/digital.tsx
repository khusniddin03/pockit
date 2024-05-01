import Container from "../container/container";
import DigitalCard from "../digital-card/digital-card";
import { DIGITAL_DATA } from "./digital-data";
import "./digital.scss";

export default function Digital(): React.ReactElement {
  return (
    <section className="digital">
      <Container>
        <h3 className="digital__title">A digital account made for everyone</h3>
        <div className="digital__list">
          {DIGITAL_DATA.map((digital, index) => (
            <DigitalCard key={index} {...digital} />
          ))}
        </div>
        <p className="digital__bottom">
          *subject to AML and regulatory requirements
        </p>
      </Container>
    </section>
  );
}
