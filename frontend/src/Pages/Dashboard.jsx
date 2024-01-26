import React from "react";
import Graph from "../components/Graph/Graph";
import Chart from "../components/Chart/Chart";
import Profile from "../components/Profile/Profile";
import TableComponents from "../components/Table/Table";

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <div className="graph-and-chart">
        <div className="graph">
          <Graph />
        </div>
        <div className="chart">
          <Chart />
        </div>
      </div>
      <div className="table-area">
        <TableComponents/>
        <Profile/>
      </div>
    </div>
  );
}

export default Dashboard;
