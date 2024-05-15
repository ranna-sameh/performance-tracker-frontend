import { MenuItem, Select } from "@mui/material";

const SelectorMenu = ({ options, selectedValue, setSelected }) => {
  return (
    <Select
      value={selectedValue}
      onChange={(e) => setSelected(e.target.value)}
      style={{ marginBottom: 20, fontSize: 14 }}
    >
      {options.map((option, index) => (
        <MenuItem value={option} key={index}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
};
export default SelectorMenu;
