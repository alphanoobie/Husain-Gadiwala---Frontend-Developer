import { Card, Space } from "antd";
import React from "react";

export default function DataCard({ data }) {
  return (
    <Card
      className="w-fit"
      title={
        <Space>
          <p>Serial :</p> <p>{data.capsule_serial}</p>
        </Space>
      }
      extra={
        <a className="underline" href="www.google.com">
          More
        </a>
      }
    >
      <div className="pr-10">
        <Space>
          <p>Status :</p> <p>{data.status}</p>
        </Space>
        <br />
        <Space>
          <p>Type :</p> <p>{data.type}</p>
        </Space>
        <br />
        <Space>
          <p>Landings :</p> <p>{data.landings}</p>
        </Space>
      </div>
    </Card>
  );
}
