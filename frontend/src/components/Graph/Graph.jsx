import React, { useEffect, useState } from "react";
import { Line } from "@ant-design/charts";
import { getGrapData } from "../../api/api";

function Graph() {
  const [graphData, setGraphData] = useState([]);
  const getGraphDatas = async () => {
    try {
      const response = await getGrapData("/api/graph");
      setGraphData(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGraphDatas();
  }, []);

  const props = {
    data: graphData,
    xField: "x",
    yField: "y",
  };
  return <Line   height={300} {...props} />;
}

export default Graph;
