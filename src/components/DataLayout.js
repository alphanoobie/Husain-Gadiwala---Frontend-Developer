import React from "react";
import DataCard from "./DataCard";

export default function DataLayout() {
  const sampleData = {
    capsule_serial: "C101",
    capsule_id: "dragon1",
    status: "retired",
    original_launch: "2010-12-08T15:43:00.000Z",
    original_launch_unix: 1291822980,
    missions: [
      {
        name: "COTS 1",
        flight: 7,
      },
    ],
    landings: 0,
    type: "Dragon 1.0",
    details: "Reentered after three weeks in orbit",
    reuse_count: 0,
  };

  return <div className="m-6 p-6 bg-white rounded">
    <DataCard data={sampleData}/>
  </div>;
}
