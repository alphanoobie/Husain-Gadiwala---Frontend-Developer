import React, { useContext } from "react";
import DataCard from "./DataCard";
import { CapsuleContext } from "../App";

export default function DataLayout() {
  // eslint-disable-next-line
  const { capsuleData, setCapsuleData } = useContext(CapsuleContext);

  return (
    <div className="m-6 p-6 bg-white rounded">
      <div className="flex flex-wrap justify-center">
        {capsuleData &&
          capsuleData.map((data, index) => {
            return <DataCard data={data} />;
          })}
      </div>
    </div>
  );
}
