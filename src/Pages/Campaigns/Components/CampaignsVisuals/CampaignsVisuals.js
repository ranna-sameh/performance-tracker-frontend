import { Box, Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../../../api";
import Charts from "../../../../commonComponents/Charts";
import SelectorMenu from "../../../../commonComponents/SelectorMenu/SelectorMenu";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const adMetrics = ["clicks", "impressions", "spent"];

const CampaignsVisuals = () => {
  const [data, setData] = useState([]);
  const [metric, setMetric] = useState("clicks");
  const [startDate, setStartDate] = useState("2010-08-01");
  const [endDate, setEndDate] = useState("2010-09-11");

  const handleApplyFilters = () => {
    axios
      .get(`${API_URL}/campaigns/metrics/`, {
        params: {
          metric: metric,
          start_date: startDate,
          end_date: endDate,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch();
  };

  useEffect(() => {
    handleApplyFilters();
  }, []);

  return (
    <Box style={{ display: "flex", flexDirection: "column", rowGap: 10 }}>
      <>
        <Typography style={{ fontWeight: 600 }}>CAMPAIGN DATES:</Typography>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          rowSpacing={0.5}
        >
          <Grid item xs={6} md={3}>
            <Typography>Start date</Typography>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(format(date, "yyyy-MM-dd"))}
              dateFormat="yyyy/MM/dd"
            />
          </Grid>{" "}
          <Grid item xs={6} md={3}>
            <Typography>End date</Typography>

            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(format(date, "yyyy-MM-dd"))}
              dateFormat="yyyy/MM/dd"
            />
          </Grid>
        </Grid>
      </>
      <Box sx={{ width: { xs: "100%", md: "20%" } }}>
        <Typography style={{ fontWeight: 600 }}>ADS METRIC:</Typography>
        <SelectorMenu
          options={adMetrics}
          setSelected={setMetric}
          selectedValue={metric}
        />
      </Box>

      <Button
        onClick={() => handleApplyFilters()}
        variant="contained"
        style={{ backgroundColor: "black" }}
        sx={{ width: { xs: "100%", md: "15%" } }}
      >
        Apply Filters
      </Button>
      <Charts data={data} />
    </Box>
  );
};
export default CampaignsVisuals;
