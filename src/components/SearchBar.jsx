import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';


const SearchBar = ({darkMode}) => {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();


    const handleChange = (event) => {
        const value = event.target.value;
        setSearchText(value);

        if (value) {
            navigate(`/?search=${value}`);
        } else {
            navigate("/"); 
        }
    };

    return (
        <TextField
            id="outlined-basic"
            label="Search for a country"
            variant="outlined"
            value={searchText}
            onChange={handleChange}
            sx={{ width: {xs: "100%", md: "33%" },
                "& .MuiOutlinedInput-root": {
                    color: darkMode ? "darkmode.primary.white" : "lightmode.primary.black", 
                    caretColor: darkMode ? "darkmode.primary.white" : "lightmode.primary.black", 
                    "& fieldset": { borderColor: "#3e4a55" }, 
                    "&:hover fieldset": { borderColor: darkMode ? "darkmode.primary.white" : "lightmode.primary.black" }, 
                    "&.Mui-focused fieldset": { borderColor: darkMode ? "darkmode.primary.white" : "lightmode.primary.black", borderWidth: 2 }, 
                },
                "& .MuiInputLabel-root": {
                    color: darkMode ? "#ffffff90" : "#00000095", 
                    "&.Mui-focused": { color: darkMode ? "darkmode.primary.white" : "lightmode.primary.black" } 
                },
            }}
        />
    );
};

export default SearchBar;
