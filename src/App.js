import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Banner from "./components/Banner";
import HeaderContent from "./components/HeaderContent";

function App() {
  return (
    <>
      <Layout>
        <Header>
          <HeaderContent />
        </Header>

        <Content>
          <Banner />
        </Content>

        <Footer>Hello</Footer>
      </Layout>
    </>
  );
}

export default App;
