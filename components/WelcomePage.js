// components/WelcomePage.js
import React, { useState } from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import Link from "next/link";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";

const WelcomePage = () => {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome to ANIDA!
      </Typography>
      <Typography variant="body1">
        Explore nearby EV charging and fueling stations at just one click!
      </Typography>

      {/* Use Grid to center the button */}
      <Grid
        container
        spacing={2}
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ height: "60vh", marginTop: 1 }}
      >
        <Grid item>
          {/* Add a clickable tile to go to ChargingMap component */}
          <Link
            href={{
              pathname: "/mapPage",
              query: { type: "charging_stations" },
            }}
          >
            <Button
              variant="outlined"
              color="success"
              sx={{ height: "25vh", width: "20vh", fontFamily: "sans-serif" }}
            >
              <FlashOnIcon />
              Find EV Stations
            </Button>
          </Link>
        </Grid>
        <Grid item>
          {/* Add a clickable tile to go to ChargingMap component */}
          <Link
            href={{ pathname: "/mapPage", query: { type: "fuel_stations" } }}
          >
            <Button
              variant="outlined"
              color="info"
              sx={{ height: "25vh", width: "20vh", fontFamily: "sans-serif" }}
            >
              <LocalGasStationIcon />
              Find Fuel Stations
            </Button>
          </Link>
        </Grid>
      </Grid>

      {!showMessage && (
        <Link href="/">
          <Button variant="outlined" sx={{ marginTop: 2, marginLeft: 2 }}>
            Back
          </Button>
        </Link>
      )}
    </Container>
  );
};

export default WelcomePage;
