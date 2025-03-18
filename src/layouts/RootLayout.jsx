import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

import { Box } from "@mui/material";

const RootLayout = ({ darkMode, setDarkMode }) => {
  return (
    <Box sx={{
      backgroundColor: darkMode ? 'darkmode.primary.darkblue' : 'lightmode.primary.main',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: 0,
      margin: 0
    }}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main style={{ marginTop: "100px" }}>
        <Outlet />
      </main>
    </Box>
  );
};

export default RootLayout;
