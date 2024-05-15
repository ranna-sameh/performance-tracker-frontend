import React, { useState } from "react";
import LineChartComponent from "./Components/LineChart/";
import BarChartComponent from "./Components/BarChart";
import PieChartComponent from "./Components/PieChart/PieChart";
import SelectorMenu from "../SelectorMenu/SelectorMenu";
import { Box } from "@mui/material";
const chartsTypes = ["Line Chart", "Bar Chart", "Pie Chart"];

const Chart = ({ data, xaxislabel, yaxislabel }) => {
  let ChartComponent = null;
  const [chartType, setChartType] = useState("Line Chart");

  switch (chartType) {
    case "Line Chart":
      ChartComponent = (
        <LineChartComponent
          data={data}
          xaxislabel={xaxislabel}
          yaxislabel={yaxislabel}
        />
      );
      break;
    case "Bar Chart":
      ChartComponent = (
        <BarChartComponent
          data={data}
          xaxislabel={xaxislabel}
          yaxislabel={yaxislabel}
        />
      );
      break;
    case "Pie Chart":
      ChartComponent = <PieChartComponent data={data} />;
      break;
    default:
      ChartComponent = <div>No chart type specified</div>;
  }

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <SelectorMenu
          options={chartsTypes}
          setSelected={setChartType}
          selectedValue={chartType}
        />
      </Box>

      {ChartComponent}
    </div>
  );
};
export default Chart;
