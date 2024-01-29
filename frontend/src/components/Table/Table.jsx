import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { tableDataGet } from "../../api/api";

function TableComponents() {
  const [tableData, setTableData] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const fetchTableData = async () => {
    const response = await tableDataGet("/api/table");
    console.log(response);
    setTableData(response.data || []);
  };
  useEffect(() => {
    fetchTableData();
  }, []);

  React.useEffect(() => {
    const handleRaize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleRaize);

    return () => window.removeEventListener("resize", handleRaize);
  }, []);

  const columns = [
    {
      title: "No",
      dataIndex: "id",
      width: 100,
    },
    {
      title: "Name",
      dataIndex: "name",
      width: 300,
    },
    {
      title: "Age",
      dataIndex: "quantity",
      width: 300,
    },
    {
      title: "Address",
      dataIndex: "price",
      width: 300,
    },
  ];

  return isMobile ? (
    <div className="table">
      <Table
        style={{ width: "100%" }}
        columns={columns}
        dataSource={tableData}
        pagination={false}
      />
    </div>
  ) : (
    <div className="table">
      <Table
        style={{ width: "100%" }}
        columns={columns}
        dataSource={tableData}
        pagination={{
          pageSize: 4,
        }}
      />
    </div>
  );
}

export default TableComponents;
