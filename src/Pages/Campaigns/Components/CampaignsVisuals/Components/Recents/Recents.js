import { Grid, Typography } from "@mui/material";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { API_URL } from "../../../../../../api";
import BarChart from "../../../../../../commonComponents/Charts/Components/BarChart";
import LineChartComponent from "../../../../../../commonComponents/Charts/Components/LineChart";
import PieChartComponent from "../../../../../../commonComponents/Charts/Components/PieChart/PieChart";

const Recents = () => {
  const [recentsData, setRecentsData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/campaigns/?ordering=-id`)
      .then((response) => {
        setRecentsData(response.data.results);
      })
      .catch();
  }, []);

  const constructData = useCallback(
    (property) => {
      return recentsData.map((item) => ({
        name: item.id,
        value: item[property],
      }));
    },
    [recentsData]
  );
  return (
    <>
      <Typography variant="h6" style={{ marginBottom: 10 }}>
        RECENT CAMPAIGNs ANALYTICS
      </Typography>
      <Grid container columnSpacing={5} rowSpacing={8}>
        <Grid item xs={12} md={12}>
          <LineChartComponent
            data={constructData("total_spent")}
            xaxislabel="Campaign"
            yaxislabel="Total Spent"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <BarChart
            data={constructData("total_impressions")}
            xaxislabel="Campaign"
            yaxislabel="Impressions"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <PieChartComponent
            data={constructData("total_ads_number")}
            xaxislabel="Campaign"
            yaxislabel="Total ads number"
          />
        </Grid>
      </Grid>{" "}
    </>
  );
};
export default Recents;
