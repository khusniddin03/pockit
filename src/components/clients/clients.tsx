import ClientsHero from "../clients-hero/clients-hero";
import ClientsList from "../clients-list/clients-list";
import "./clients.scss";

export default function Clients(): React.ReactElement {
  return (
    <section className="clients">
      <ClientsHero />
      <ClientsList />
    </section>
  );
}
