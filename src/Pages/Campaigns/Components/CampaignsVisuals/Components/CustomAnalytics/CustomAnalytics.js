import { Box, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { API_URL } from "../../../../../../api";
import Charts from "../../../../../../commonComponents/Charts";
import SelectorMenu from "../../../../../../commonComponents/SelectorMenu/SelectorMenu";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
const adMetrics = ["clicks", "impressions", "spent"];

const CustomAnaylitics = () => {
  const [data, setData] = useState([]);
  const [metric, setMetric] = useState("clicks");
  const [startDate, setStartDate] = useState("2010-08-01");
  const [endDate, setEndDate] = useState("2010-09-11");

  const handleApplyFilters = useCallback(() => {
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
  }, [metric, setData, startDate, endDate]);

  useEffect(() => {
    handleApplyFilters();
  }, [handleApplyFilters]);

  return (
    <Box>
      <Typography variant="h6" sx={{ marginBottom: "20px" }}>
        CUSTOM CAMPAIGNs ANALYTICS
      </Typography>
      <Box style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}>
        <FilterAltOutlinedIcon />
        <Typography>Filter campaigns</Typography>
      </Box>
      <Grid container rowSpacing={2} columnSpacing={1}>
        <Grid item xs={6} md={1.5}>
          <SelectorMenu
            options={adMetrics}
            setSelected={setMetric}
            selectedValue={metric}
          />
        </Grid>
        <Grid item xs={6} md={1.5}>
          <Typography>Start date:</Typography>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(format(date, "yyyy-MM-dd"))}
          />
        </Grid>
        <Grid item xs={6} md={1.5}>
          <Typography>End date:</Typography>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(format(date, "yyyy-MM-dd"))}
          />
        </Grid>
      </Grid>

      <Charts data={data} />
    </Box>
  );
};
export default CustomAnaylitics;
