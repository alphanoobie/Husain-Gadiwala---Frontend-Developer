import { Button, Space } from "antd";
import Search from "antd/es/input/Search";
import React, { useContext, useEffect, useState } from "react";
import { CapsuleContext } from "../App";

export default function SearchBar() {
  const { capsuleData, setCapsuleData } = useContext(CapsuleContext);
  const [ogCapsuleData, setogCapsuleData] = useState(capsuleData);

  const onSearch = (value, query) => {
    if (query === "status") {
      const data = capsuleData.filter((item) => item.status.includes(value));
      setCapsuleData(data);
    }
    if (query === "type") {
      const data = capsuleData.filter((item) => item.type.includes(value));
      setCapsuleData(data);
    }
    if (query === "landings") {
      // eslint-disable-next-line
      const data = capsuleData.filter((item) => item.landings == value);
      setCapsuleData(data);
    }
  };

  const handleClear = () => {
    setCapsuleData(ogCapsuleData);
  };

  useEffect(() => {
    if (ogCapsuleData.length === 0 && capsuleData.length > 0) {
      setogCapsuleData(capsuleData);
      console.log("done");
    }
    // eslint-disable-next-line
  }, [capsuleData]);
  return (
    <div className="m-6 p-6 bg-white rounded-lg flex justify-center">
      <Space className="flex md:flex-row flex-col">
        <Search
          className="w-64"
          placeholder="Search by Status"
          allowClear
          onSearch={(value) => {
            onSearch(value, "status");
          }}
        />
        <Search
          className="w-64"
          placeholder="Search by Type"
          allowClear
          onSearch={(value) => {
            onSearch(value, "type");
          }}
        />
        <Search
          className="w-64"
          placeholder="Search by Landings"
          allowClear
          onSearch={(value) => {
            onSearch(value, "landings");
          }}
        />
        <Button onClick={handleClear}>Reset</Button>
      </Space>
    </div>
  );
}
