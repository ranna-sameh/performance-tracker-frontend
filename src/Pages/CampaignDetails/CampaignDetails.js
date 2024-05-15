import CustomTabs from "../../commonComponents/CustomTabs";
import AdsRawData from "./Components/AdsRawData/AdsRawData";
import AdsVisuals from "./Components/AdsVisuals";

const tabComponents = {
  "Raw Data": <AdsRawData />,
  Visuals: <AdsVisuals />,
};
const CampaignDetails = () => {
  return <CustomTabs tabComponents={tabComponents} />;
};
export default CampaignDetails;
