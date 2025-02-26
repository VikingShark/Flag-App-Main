import { Outlet } from 'react-router-dom'
import logo from '../assets/techover-logo.png'
import './RootLayout.css'

import { AppBar, Box, Toolbar, Typography, Button , IconButton} from '@mui/material';
import { styled } from "@mui/material/styles";
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';


const StyledAppBar = styled(AppBar)({
    backgroundColor: "#3e4a55", width: "100%", top: "0", left: "0", position: "fixed", display: "flex", justifyContent: "center", alignItems: "center", padding: "0 !important" // Byt ut till din färg från style-guide.md
  });

const RootLayout = () => {
    return (
        <div className="app-container">
           <StyledAppBar position="static">
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", maxWidth: "1150px", width: "100%", padding: "0px !important" }}>
                    {/* Vänster: App-namn */}
                    <Typography variant="h6" sx={{ fontWeight: "" }}>
                    The Flag App
                    </Typography>

                    {/* Mitten: Logotyp */}
                    <Box component="img" src={logo} alt="Logo" sx={{ height: 24 }} />

                    {/* Höger: Dark Mode Toggle */}
                    <IconButton color="inherit">
                    <Button
                    sx={{
                        color: "white",
                        backgroundColor: "transparent",
                        "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)", // Ger en vit ton inom knappen vid hover
                        },
                        "&:active": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)", // Samma bakgrund som hover vid klick
                        },
                        "& .MuiButtonBase-root": {
                        overflow: "hidden", // Se till att ripple-effekten hålls inom knappen
                        borderRadius: "4px", // Förhindrar att knappen blir oval vid klick
                        },
                    }}
                    variant="text"
                    >
                    <BrightnessHighIcon sx={{ fontSize: "20px", mr: 1 }} />
                    Dark Mode
                    </Button>



                    </IconButton>
                </Toolbar>
            </StyledAppBar>
            <main style={{ marginTop: "55px" }}>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout;