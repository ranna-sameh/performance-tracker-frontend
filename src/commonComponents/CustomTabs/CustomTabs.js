import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CustomTabPanel from "./Components/CustomTabPanel/CustomtabPanel";

const CustomTabs = ({ tabComponents }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "black",
            },
            "& .Mui-selected": {
              color: "black",
              fontWeight: "bold",
            },
          }}
        >
          {Object.keys(tabComponents).map((label, index) => (
            <Tab key={index} label={label} />
          ))}
        </Tabs>
      </Box>
      {Object.entries(tabComponents).map(([label, component], index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {component}
        </CustomTabPanel>
      ))}
    </Box>
  );
};

export default CustomTabs;
