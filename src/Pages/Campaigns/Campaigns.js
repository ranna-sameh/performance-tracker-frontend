import CustomTabs from "../../commonComponents/CustomTabs";
import CampaignsRawData from "./Components/CampaignsRawData/CampaignsRawData";
import CampaignsVisuals from "./Components/CampaignsVisuals/CampaignsVisuals";

const tabComponents = {
  "Raw Data": <CampaignsRawData />,
  Visuals: <CampaignsVisuals />,
};
const Campaigns = () => {
  return <CustomTabs tabComponents={tabComponents} />;
};

export default Campaigns;
