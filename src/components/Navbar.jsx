import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { lighten } from "@mui/system";
import logo from "../assets/techover-logo.png";
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';

const Navbar = () => {
  return (
    <AppBar
      sx={{
        width: "100%",
        height: 65,
        backgroundColor: "primary.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          maxWidth: 1150,
          display: "flex",
          justifyContent: "space-between",
          alignItems: 'center'
        }}
      >
        <Typography fontSize={20}>The Flag App</Typography>
        <img src={logo} alt="Techover Logo" />
        <Button
          sx={{
            color: "primary.white",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "#F2F2F220",
            },
          }}
        >
          <BrightnessHighIcon sx={{ fontSize: "20px", mr: 1 }} />
          DARK MODE
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
