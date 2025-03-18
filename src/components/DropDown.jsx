import { useNavigate } from "react-router-dom";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const regions = ["all", "africa", "americas", "asia", "europe", "oceania"];

const DropDown = ({ darkMode }) => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    const selectedRegion = event.target.value;

    if (selectedRegion !== "all") {
      navigate(`/?region=${selectedRegion}`);
    } else {
      navigate("/");
    }
  };

  const menuProps = {
    PaperProps: {
      sx: {
        backgroundColor: darkMode ? "darkmode.primary.main" : "lightmode.primary.main",
        color: darkMode ? "darkmode.primary.white" : "lightmode.primary.black",
      },
    },
  };

  return (
    <FormControl
      fullWidth
      sx={{
        width: "15%",
        "& .MuiOutlinedInput-root": {
          color: darkMode ? "darkmode.primary.white" : "lightmode.primary.black",
          "& fieldset": { borderColor: "#3e4a55" },
          "&:hover fieldset": { borderColor: darkMode ? "darkmode.primary.white" : "lightmode.primary.black" },
          "&.Mui-focused fieldset": { borderColor: darkMode ? "darkmode.primary.white" : "lightmode.primary.black", borderWidth: 2 },
        },
        "& .MuiInputLabel-root": {
          color: darkMode ? "#ffffff90" : "#00000095",
          "&.Mui-focused": { color: darkMode ? "darkmode.primary.white" : "lightmode.primary.black" },
        },
        "& .MuiSvgIcon-root": {
          color: darkMode ? "#ffffff90" : "#00000095",
        },
        "& .MuiSelect-select": {
          textAlign: "left", // Justera texten till vänster när en region är vald
        },
      }}
    >
      <InputLabel id="region-select-label">Region</InputLabel>
      <Select
        labelId="region-select-label"
        id="region-select"
        defaultValue=""
        onChange={handleChange}
        label="Region"
        MenuProps={menuProps} 
      >
        {regions.map((region) => (
          <MenuItem
            key={region}
            value={region}
            sx={{
              backgroundColor: darkMode ? "darkmode.primary.main" : "lightmode.primary.main",
              color: darkMode ? "darkmode.primary.white" : "lightmode.primary.black",
              "&:hover": {
                backgroundColor: darkMode ? "darkmode.primary.hover" : "lightmode.primary.hover",
              },
            }}
          >
            {region.charAt(0).toUpperCase() + region.slice(1)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDown;