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
      maxWidth="lg"
      sx={{
        marginTop: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor:"teal"
      }}
    >
      {/* <Typography variant="h4" gutterBottom fontFamily={'sans-serif'} color={'white'}>
        Fill up Fuel !!
      </Typography> */}
      <Typography variant="h5" fontFamily={'sans-serif'} color={'white'}>
        Explore nearby EV charging and fueling stations at just one Tap!!
      </Typography>

      {/* Use Grid to center the button */}
      <Grid
        container
        spacing={1}
        justifyContent="space-around"
        alignItems="center"
        sx={{ height:'60vh', marginTop: 0 }}
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
              variant="contained"
              color="info"
              sx={{ height: "22vh", width: "22vh", fontFamily: "initial", backgroundColor:"ghostwhite" , color:"steelblue", borderRadius:"20px" }}
            >
              <FlashOnIcon fontSize="large" />
              EV Stations
            </Button>
          </Link>
        </Grid>
        <Grid item>
          {/* Add a clickable tile to go to ChargingMap component */}
          <Link
            href={{ pathname: "/mapPage", query: { type: "petrol pumps fuel stations" } }}
          >
            <Button
              variant="outlined"
              color="info"
              sx={{ height: "22vh", width: "22vh", fontFamily: "initial", backgroundColor:"ghostwhite" , color:"tomato", borderRadius:"20px" }}
            >
              <LocalGasStationIcon fontSize="large"  />
              Fuel Stations
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
