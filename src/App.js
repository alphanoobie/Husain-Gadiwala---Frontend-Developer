import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Banner from "./components/Banner";
import HeaderContent from "./components/HeaderContent";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Layout>
        <Header>
          <HeaderContent />
        </Header>

        <Content>
          <Banner />
          <SearchBar />
        </Content>

        <Footer></Footer>
      </Layout>
    </>
  );
}

export default App;
