import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import logoDarkMode from "../assets/techover-logo.png";
import logoLightMode from '../assets/techover-logo-dark.png'
import {BrightnessHigh, Brightness4} from '@mui/icons-material';

const Navbar = ({ darkMode, setDarkMode }) => {

  const toggleDarkMode = () => {
    if(darkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  };
  
  return (
    <AppBar
      sx={{
        width: "100%",
        height: 65,
        backgroundColor: darkMode ? "darkmode.primary.main" : "lightmode.primary.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 24px"
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          maxWidth: 1150,
          display: "flex",
          justifyContent: "space-between",
          alignItems: 'center',
         
        }}
      >
        <Typography sx={{color: darkMode ? "darkmode.primary.white" : "lightmode.primary.black"}} fontSize={20}>The Flag App</Typography>
        <Box component="img" src={darkMode ? logoDarkMode : logoLightMode} sx={{display: {xs: 'none', md: 'block'}}} alt="Techover Logo" />
        <Button
          onClick={toggleDarkMode}
          sx={{
            color: darkMode ? "darkmode.primary.white" : "lightmode.primary.black",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: darkMode ? "darkmode.primary.hover" : "lightmode.primary.hover",
            },
          }}
        >
          {darkMode ? <BrightnessHigh sx={{ fontSize: "20px", mr: 1 }} /> : <Brightness4 sx={{ fontSize: "20px", mr: 1 }} />}
          {darkMode ? "Dark Mode" : "Light Mode"}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
