import { Box, Typography } from "@mui/material";

const NotFound = ({ darkMode }) => {
    return ( 
        <Box>
            <Typography sx={{color: darkMode ? "darkmode.primary.white" : "lightmode.primary.black"}}>Could not find that country...</Typography>
        </Box>
     );
}
 
export default NotFound;