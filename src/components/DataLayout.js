import axios from "axios";
import React, { useEffect } from "react";
import DataCard from "./DataCard";
import { useState } from "react";
import { Spin } from "antd";

export default function DataLayout() {
  const [capsuleData, setCapsuleData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const data = await axios.get("https://api.spacexdata.com/v3/capsules");
    setCapsuleData(data.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="m-6 p-6 bg-white rounded">
      {loading ? (
        <div className="flex justify-center">
          <Spin />
        </div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {capsuleData &&
            capsuleData.map((data, index) => {
              return <DataCard data={data} />;
            })}
        </div>
      )}
    </div>
  );
}
