import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Banner from "./components/Banner";
import DataLayout from "./components/DataLayout";
import HeaderContent from "./components/HeaderContent";
import SearchBar from "./components/SearchBar";

export const CapsuleContext = createContext();

function App() {
  const [capsuleData, setCapsuleData] = useState([]);
  const value = {capsuleData, setCapsuleData}

  const getData = async () => {
    const data = await axios.get("https://api.spacexdata.com/v3/capsules");
    setCapsuleData(data.data);
  };

  useEffect(() => {
    getData();

  }, []);

  return (
    <CapsuleContext.Provider value={value}>
      <Layout>
        <Header>
          <HeaderContent />
        </Header>

        <Content>
          <Banner />
          <SearchBar />
          <DataLayout />
        </Content>

        <Footer></Footer>
      </Layout>
    </CapsuleContext.Provider>
  );
}

export default App;
