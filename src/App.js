import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./commonComponents/Layout/Layout";
import CampaignDetails from "./Pages/CampaignDetails";
import Campaigns from "./Pages/Campaigns";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Campaigns />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/campaigns/:id" element={<CampaignDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
