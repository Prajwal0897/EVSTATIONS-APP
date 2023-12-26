// components/Header.js
import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#222222" }}>
      <Toolbar>
        <Box display="flex" alignItems="center">
          <img
            src="/assets/anida-logo.png"
            alt="Logo"
            style={{
              maxWidth: 60,
              maxHeight: 55,
              marginLeft: "10px",
              marginRight: "30px",
            }}
          />
          <Typography
            variant="h6"
            style={{ color: "teal", fontFamily: "cursive", fontSize: 32 }}
          >
            TAP N GO!!
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
