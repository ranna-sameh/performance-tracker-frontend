import SortingTable from "../../../../commonComponents/SortingTable";
const headCells = [
  {
    id: "id",
    label: "id",
  },
  {
    id: "start_date",
    label: "Start date",
  },
  {
    id: "end_date",
    label: "End date",
  },
  {
    id: "xyz_campaign_id",
    label: "xyz campaign id",
  },
  {
    id: "total_ads_number",
    label: "total ads number",
  },
  {
    id: "total_spent",
    label: "total spent",
  },
  {
    id: "total_impressions",
    label: "total_impressions",
  },
];
const CampaignsRawData = () => {
  return <SortingTable headCells={headCells} url="campaigns" />;
};
export default CampaignsRawData;
