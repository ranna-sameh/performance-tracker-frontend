import { Box } from "@mui/material";

const CustomTabPanel = (props) => {
  const { children, value, index } = props;

  return (
    <div hidden={value !== index} id={index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};
export default CustomTabPanel;
