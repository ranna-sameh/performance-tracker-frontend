import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import LineChartComponent from "./Components/LineChart/";
import BarChartComponent from "./Components/BarChart";
import PieChartComponent from "./Components/PieChart/PieChart";
const chartsTypes = ["Line Chart", "Bar Chart", "Pie Chart"];

const Chart = ({ data }) => {
  let ChartComponent = null;
  const [chartType, setChartType] = useState("Line Chart");

  switch (chartType) {
    case "Line Chart":
      ChartComponent = <LineChartComponent data={data} />;
      break;
    case "Bar Chart":
      ChartComponent = <BarChartComponent data={data} />;
      break;
    case "Pie Chart":
      ChartComponent = <PieChartComponent data={data} />;
      break;
    default:
      ChartComponent = <div>No chart type specified</div>;
  }

  return (
    <div>
      <Select
        value={chartType}
        onChange={(e) => setChartType(e.target.value)}
        style={{ marginBottom: 20 }}
      >
        {chartsTypes.map((type, index) => {
          return (
            <MenuItem value={type} key={index}>
              {type}
            </MenuItem>
          );
        })}
      </Select>
      {ChartComponent}
    </div>
  );
};
export default Chart;
