import { useNavigate } from "react-router-dom";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const regions = ["all", "africa", "americas", "asia", "europe", "oceania"];

const DropDown = () => {
    const navigate = useNavigate();

    const handleChange = (event) => {
         const selectedRegion = event.target.value;

        if(selectedRegion !== "all") {
            navigate(`/?region=${selectedRegion}`);
        } else {
            navigate('/')
        }
        
    };

    return (
        <FormControl fullWidth 
            sx={{ width: "15%",
                "& .MuiOutlinedInput-root": {
                    color: "#F2F2F2", // Textfärg
                    "& fieldset": { borderColor: "#3e4a55" }, 
                    "&:hover fieldset": { borderColor: "#F2F2F2" }, 
                    "&.Mui-focused fieldset": { borderColor: "#F2F2F2", borderWidth: 2 }, 
                },
                "& .MuiInputLabel-root": {
                    color: "rgba(255, 255, 255, 0.7)", 
                    "&.Mui-focused": { color: "#F2F2F2" }, 
                },
                "& .MuiSvgIcon-root": { 
                    color: "#F2F2F2",
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
            >
                {regions.map((region) => (
                    <MenuItem key={region} value={region}>
                        {region.charAt(0).toUpperCase() + region.slice(1)}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>


        
    );
};

export default DropDown;