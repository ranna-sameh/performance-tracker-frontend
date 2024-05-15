import { Box } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import SortingTable from "../../../../commonComponents/SortingTable";
import Details from "./Components/details";
const headCells = [
  { id: "id", label: "Id" },
  { id: "age", label: "Age" },
  { id: "gender", label: "Gender" },
  { id: "interest", label: "Interest" },
  { id: "impressions", label: "Impressions" },
  { id: "clicks", label: "Clicks" },
  { id: "spent", label: "Spent" },
  { id: "total_conversion", label: "Total conversion" },
  { id: "approved_conversion", label: "Approved conversion" },
];

const AdsRawData = () => {
  const { id } = useParams();
  const [campaignDetails, setCampaignDetails] = useState({});
  return (
    <Box style={{ display: "flex", flexDirection: "column", rowGap: 20 }}>
      <Details campaign={campaignDetails} />
      <SortingTable
        headCells={headCells}
        url={`campaigns/${id}`}
        setCampaignDetails={setCampaignDetails}
        isCampaign
      />
    </Box>
  );
};
export default AdsRawData;
