import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const YourComponent = ({ campaign }) => {
  return (
    <Box sx={{ border: "0.5px solid black", padding: "10px" }}>
      <Typography variant="h6">Campaign ID: {campaign?.id}</Typography>

      <Box sx={{ marginBottom: "10px" }}>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Dates
        </Typography>
        <Typography>Start date: {campaign?.start_date}</Typography>
        <Typography>End date: {campaign?.end_date}</Typography>
      </Box>

      <Box sx={{ marginBottom: "10px" }}>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Ads Brief
        </Typography>
        <Typography>XYZ Campaign ID: {campaign?.xyz_campaign_id}</Typography>
        <Typography>Total Spent: {campaign?.total_spent}</Typography>
        <Typography>
          Total Impressions: {campaign?.total_impressions}
        </Typography>
        <Typography>Total Ads Number: {campaign?.total_ads_number}</Typography>
      </Box>
    </Box>
  );
};

export default YourComponent;
