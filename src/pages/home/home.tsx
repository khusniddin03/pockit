import Faq from "@/components/faq/faq";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Layout from "@/components/layout/layout";
import Main from "@/components/main/main";
import Support from "@/components/support/support";
import Customers from "@/components/customers/customers";
import Hero from "@/components/hero/hero";
import Digital from "@/components/digital/digital";
import Discover from "@/components/discover/discover";

export default function Home(): React.ReactElement {
  return (
    <Layout>
      <Header />
      <Main>
        <Hero />
        <Discover />
        <Digital />
        <Customers />
        <Support />
        <Faq />
      </Main>
      <Footer />
    </Layout>
  );
}
