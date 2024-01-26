import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { tableDataGet } from "../../api/api";

function TableComponents() {
  const [tableData, setTableData] = useState([]);
  const fetchTableData = async () => {
    const response = await tableDataGet("/api/table");
    console.log(response);
    setTableData(response.data || [])
  };
  useEffect(() => {
    fetchTableData();
  }, []);
  const columns = [
    {
      title: "No",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      width:300

    },
    {
      title: "Age",
      dataIndex: "quantity",
      width:300

    },
    {
      title: "Address",
      dataIndex: "price",
      width:300

    },
  ];

  return (
    <div className="table">
      <Table
        style={{ width: "100%" }}
        columns={columns}
        dataSource={tableData}
        pagination={{
          pageSize:4
        }}
      />
    </div>
  );
}

export default TableComponents;
