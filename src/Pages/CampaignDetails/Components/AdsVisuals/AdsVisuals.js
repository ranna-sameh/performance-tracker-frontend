import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../../../api";
import Charts from "../../../../commonComponents/Charts";
import SelectorMenu from "../../../../commonComponents/SelectorMenu/SelectorMenu";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

const adMetrics = [
  "clicks",
  "impressions",
  "spent",
  "total_conversion",
  "approved_conversion",
];

const AdsVisuals = () => {
  const [data, setData] = useState([]);
  const [metric, setMetric] = useState("clicks");
  const { id } = useParams();

  const handleApplyFilters = useCallback(() => {
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
  }, [id, metric, setData]);

  useEffect(() => {
    handleApplyFilters();
  }, [handleApplyFilters]);

  return (
    <Box style={{ display: "flex", flexDirection: "column", rowGap: 5 }}>
      <Box style={{ display: "flex", flexDirection: "row", marginBottom: 5 }}>
        <FilterAltOutlinedIcon />
        <Typography>Ads metric</Typography>
      </Box>
      <Box sx={{ width: { xs: "100%", md: "20%" } }}>
        <SelectorMenu
          options={adMetrics}
          setSelected={setMetric}
          selectedValue={metric}
        />
      </Box>

      <Charts data={data} xaxislabel="Campaign" yaxislabel={metric} />
    </Box>
  );
};
export default AdsVisuals;
