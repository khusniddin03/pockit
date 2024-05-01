import Faq from "@/components/faq/faq";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Layout from "../../components/layout/layout";
import Main from "../../components/main/main";

export default function Home(): React.ReactElement {
  return (
    <Layout>
      <Header />
      <Main>
        <Faq />
      </Main>
      <Footer />
    </Layout>
  );
}
