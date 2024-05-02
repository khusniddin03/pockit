import img from "@/assets/imgs/testamonials-pockit-girl.png";
import Container from "../container/container";
import "./clients-hero.scss";

export default function ClientsHero(): React.ReactElement {
  return (
    <div className="clients-hero">
      <Container>
        <div className="clients-hero__wrap">
          <img
            src={img}
            alt="clienst-hero-image"
            className="clients-hero__img"
          />
          <h3 className="clients-hero__title">See why our customers love us</h3>
        </div>
      </Container>
    </div>
  );
}
