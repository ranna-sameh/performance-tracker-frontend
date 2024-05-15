import CustomTabs from "../../commonComponents/CustomTabs";
import CampaignsRawData from "./Components/CampaignsRawData/CampaignsRawData";

const tabComponents = {
  "Raw Data": <CampaignsRawData />,
  Visuals: <h1>Visuals</h1>,
};
const Campaigns = () => {
  return <CustomTabs tabComponents={tabComponents} />;
};

export default Campaigns;
