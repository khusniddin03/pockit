import Container from "../container/container";
import { DIGITAL_DATA } from "./digital-data";
import "./digital.scss";

export default function Digital(): React.ReactElement {
  return (
    <section className="digital">
      <Container>
        <h3 className="digital__title">A digital account made for everyone</h3>
        <div className="digital__list">
          {DIGITAL_DATA.map((digital) => (
            <div className="digital-card">
              <img
                src={digital?.image}
                alt="digital-card-img"
                className="digital-card__img"
              />
              <p className="digital-card__title">{digital?.title}</p>
            </div>
          ))}
        </div>
        <p className="digital__bottom">
          *subject to AML and regulatory requirements
        </p>
      </Container>
    </section>
  );
}
