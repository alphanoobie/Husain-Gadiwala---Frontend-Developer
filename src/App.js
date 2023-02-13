import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import HeaderContent from "./components/HeaderContent";

function App() {
  return (
    <>
      <Layout>
        <Header>
          <HeaderContent/>
        </Header>

        <Content>

        </Content>

        <Footer>

        </Footer>
      </Layout>
    </>
  );
}

export default App;
