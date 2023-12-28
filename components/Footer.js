// components/Footer.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        color: "turquoise",
        backgroundColor: "#222222",
        p: 2,
        mt: 4,
      }}
    >
      <Typography variant="body2" align="center">
        © {new Date().getFullYear()} ANIDA. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
