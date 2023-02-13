import axios from "axios";
import React, { useContext, useEffect } from "react";
import DataCard from "./DataCard";
import { useState } from "react";
import { Spin } from "antd";
import { CapsuleContext } from "../App";

export default function DataLayout() {
  const {capsuleData, setCapsuleData} = useContext(CapsuleContext);
  const [loading, setLoading] = useState(true);

  
  return (
    <div className="m-6 p-6 bg-white rounded">
      {!loading ? (
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
