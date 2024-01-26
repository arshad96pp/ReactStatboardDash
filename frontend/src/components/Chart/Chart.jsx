import React, { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { chartCatog } from "../../api/api";

function Chart() {
  const [chartData, setChartData] = useState([]);

  const getChartDatas = async () => {
    try {
      const response = await chartCatog("/api/pie-chart");
      setChartData(response.data || []);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getChartDatas();
  }, []);
  return (
    <PieChart
    
    className="chart-container"
      colors={["#67c587", "#a9deba", "#88d1a1", "#c9ead4", "#eaf6ed"]}
      series={[
        {
          data: chartData,
        },
      ]}
     
      width={400}
      height={200}
      
    />
  );
}

export default Chart;
