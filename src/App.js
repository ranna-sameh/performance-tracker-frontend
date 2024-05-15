import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./commonComponents/Layout/Layout";
import Campaigns from "./Pages/Campaigns";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Campaigns />} />
          <Route path="/campaigns" element={<Campaigns />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
