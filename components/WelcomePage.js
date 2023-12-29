// components/WelcomePage.js
import React, { useState } from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import Link from "next/link";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const WelcomePage = () => {
  const [showMessage, setShowMessage] = useState(true);

  const getTypeForIndex = (index) => {
    switch (index) {
      case 1:
        return "chargingstations";
      case 2:
        return "petroleum/all";
      case 3:
        return "Supermarkets";
      case 4:
        return "Cafes";
      case 5:
        return "Restaurants";
      default:
        return "";
    }
  };

  const getIconAndColorForIndex = (index) => {
    switch (index) {
      case 1:
        return { icon: <FlashOnIcon fontSize="large" />, color: "steelblue" };
      case 2:
        return {
          icon: <LocalGasStationIcon fontSize="large" />,
          color: "green",
        };
      case 3:
        return {
          icon: <ShoppingCartIcon fontSize="large" />,
          color: "tan",
        };
      case 4:
        return {
          icon: <LocalCafeIcon fontSize="large" />,
          color: "brown",
        };
      case 5:
        return {
          icon: <RestaurantIcon fontSize="large" />,
          color: "tomato",
        };
      default:
        return { icon: null, color: "black" };
    }
  };

  const getLabelForIndex = (index) => {
    switch (index) {
      case 1:
        return "EV Charging Stations";
      case 2:
        return "Fuel Stations";
      case 3:
        return "Supermarkets";
      case 4:
        return "Cafes";
      case 5:
        return "Restaurants";
      default:
        return "";
    }
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "teal",
        minHeight: "70vh",
        //height: 350, // Set the height to 100% of the viewport height
        overflowY: "auto", // Allow vertical scrolling
        '@media (max-width:720px)': {
        backgroundColor: "teal",
          height:'80vh'
        },
      }}
    >
      <Typography variant="h5" fontFamily={'monospace'} color={'white'}>
        Explore Locations at just one Tap!!
      </Typography>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: 2 }}
      >
        {[1, 2, 3, 4, 5].map((item) => {
          const { icon, color } = getIconAndColorForIndex(item);
          const label = getLabelForIndex(item);

          return (
            <Grid item   key={item}>
              <Link
                href={{
                  pathname: "/mapPage",
                  query: { type: getTypeForIndex(item) },
                }}
              >
                <Button
                  variant="contained"
                  color="info"
                  sx={{
                    height: "150px",
                    width: "150px",
                    fontFamily: "initial",
                    backgroundColor: "ghostwhite",
                    color: color,
                    borderRadius: "20px",
                  }}
                >
                  {icon}
                  {label}
                </Button>
              </Link>
            </Grid>
          );
        })}
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
