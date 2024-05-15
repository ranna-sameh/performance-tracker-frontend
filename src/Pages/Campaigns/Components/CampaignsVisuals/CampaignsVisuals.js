import { Box } from "@mui/material";
import Recents from "./Components/Recents/Recents";
import CustomAnalytics from "./Components/CustomAnalytics";

const CampaignsVisuals = () => {
  return (
    <Box style={{ display: "flex", flexDirection: "column", rowGap: 10 }}>
      <Recents />
      <CustomAnalytics />
    </Box>
  );
};
export default CampaignsVisuals;
