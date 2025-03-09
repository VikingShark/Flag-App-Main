import { Outlet } from "react-router-dom";
import logo from "../assets/techover-logo.png";
import "./RootLayout.css";
import Navbar from "../components/Navbar";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";


const RootLayout = () => {
  return (
    <Box className="app-container">
      <Navbar />
      <main style={{ marginTop: "55px" }}>
        <Outlet />
      </main>
    </Box>
  );
};

export default RootLayout;
