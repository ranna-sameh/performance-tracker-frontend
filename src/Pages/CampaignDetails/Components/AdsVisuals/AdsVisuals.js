import { Box, Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../../../api";
import Charts from "../../../../commonComponents/Charts";
import SelectorMenu from "../../../../commonComponents/SelectorMenu/SelectorMenu";

const adMetrics = ["clicks", "impressions", "spent"];

const AdsVisuals = () => {
  const [data, setData] = useState([]);
  const [metric, setMetric] = useState("clicks");
  const { id } = useParams();
  const handleApplyFilters = () => {
    axios
      .get(`${API_URL}/campaigns/${id}/metrics/`, {
        params: {
          metric: metric,
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
export default AdsVisuals;
