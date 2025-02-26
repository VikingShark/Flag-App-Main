import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';


const SearchBar = () => {
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
            sx={{ width: "33%",
                "& .MuiOutlinedInput-root": {
                    color: "white", // Textfärg
                    caretColor: "#F2F2F2", // 🔥 Ändrar färgen på blinkande textmarkören
                    "& fieldset": { borderColor: "#3e4a55" }, // Standard: Grå border
                    "&:hover fieldset": { borderColor: "#F2F2F2" }, // Hover: Vit border
                    "&.Mui-focused fieldset": { borderColor: "#F2F2F2", borderWidth: 2 }, // Klickad: Vit border + tjockare outline
                },
                "& .MuiInputLabel-root": {
                    color: "rgba(255, 255, 255, 0.7)", // Standard label
                    "&.Mui-focused": { color: "#F2F2F2" }, // Klickad: Vit label
                },
            }}
        />

        // <input className="search-bar" type="text" value={searchText} onChange={handleChange} placeholder="Search for a country" />
    );
};

export default SearchBar;
