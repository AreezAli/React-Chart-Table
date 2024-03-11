import React from "react";
import "./TablePage.css";
import { useSelector } from "react-redux";
import Table from "../components/Table.js";
import * as XLSX from "xlsx";

const TablePage = () => {
  const downloadExcel = (data, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, fileName + ".xlsx");
  };
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Avg",
        accessor: "avg",
      },
      {
        Header: "Total",
        accessor: "total",
      },
    ],
    []
  );
  const myData = useSelector((state) => state.data);
  if (!myData.data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="header">
        <h1>Table Page</h1>
        <div>
          <button onClick={() => downloadExcel(myData.data.data, "tableData")}>
            Download
          </button>
        </div>
        <Table columns={columns} data={myData.data.data} />
      </div>
    </>
  );
};

export default TablePage;
