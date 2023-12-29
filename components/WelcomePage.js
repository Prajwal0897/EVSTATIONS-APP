// components/WelcomePage.js
import React, { useState } from "react";
import { Container, Typography, Button, Grid,Box } from "@mui/material";
import Link from "next/link";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MedicationIcon from '@mui/icons-material/Medication';
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
        case 6:
        return "Hospitals";
      default:
        return "";
    }
  };

  const getIconAndColorForIndex = (index) => {
    switch (index) {
      case 1:
        return { icon: <FlashOnIcon fontSize="large" />, color: "teal" };
      case 2:
        return {
          icon: <LocalGasStationIcon fontSize="large" />,
          color: "steelblue",
        };
      case 3:
        return {
          icon: <ShoppingCartIcon fontSize="large" />,
          color: "black",
        };
      case 4:
        return {
          icon: <LocalCafeIcon fontSize="large" />,
          color: "brown",
        };
      case 5:
        return {
          icon: <RestaurantIcon fontSize="large" />,
          color: "orange",
        };
        case 6:
        return {
          icon: <MedicationIcon fontSize="large" />,
          color: "red",
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
        case 6:
        return "Hospitals";
      default:
        return "";
    }
  };

  return (
    <div>
    <Container
      maxWidth="lg"
      sx={{
        //marginTop: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "teal",
        height: "100vh",
        //height: 350, // Set the height to 100% of the viewport height
        overflowY: "auto", // Allow vertical scrolling
        '@media (max-width:720px)': {
        backgroundColor: "teal",
          height:'100vh'
        },
      }}
    >
      <Typography variant="h5" fontFamily={'monospace'} color={'white'}>
        Explore Locations at just one Tap!!
      </Typography>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: 1, flexGrow: 0.5 }}
      >
        {[1, 2, 3, 4, 5,6].map((item) => {
          const { icon, color } = getIconAndColorForIndex(item);
          const label = getLabelForIndex(item);

          return (
            <Grid item key={item} xs={6} >
              <Link
                href={{
                  pathname: "/mapPage",
                  query: { type: getTypeForIndex(item) },
                }}
              >
                <Button
                  variant="contained"
                  color="inherit"
                  sx={{
                    height: "150px",
                    width: "100%",
                    fontFamily: "initial",
                    backgroundColor: "azure",
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

    </Container>
    </div>
  );
};

export default WelcomePage;
