import { Space } from "antd";
import Search from "antd/es/input/Search";
import React from "react";

export default function SearchBar() {
  return (
    <div className="m-6 p-6 bg-white rounded-lg flex justify-center">
      <Space className="flex md:flex-row flex-col">
        <Search className="w-64" placeholder="Search by status" allowClear/>
        <Search className="w-64" placeholder="Search by original launch" allowClear/>
        <Search className="w-64" placeholder="Search by type" allowClear/>
      </Space>
    </div>
  );
}
