import React, { useState } from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import Link from "next/link";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MedicationIcon from "@mui/icons-material/Medication";
import OptionsModal from "./OptionsModal";
import { useRouter } from "next/router";

const WelcomePage = () => {
  const router = useRouter();
  const [showMessage, setShowMessage] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTile, setSelectedTile] = useState(null);

  const handleTileClick = (index) => {
    const type = getTypeForIndex(index);

    if (index === 1 || index === 2) {
      const options = getOptionsForIndex(index);
      setSelectedTile({ type, options });
      setModalOpen(true);
    } else {
      // Handle other cases here if needed
      router.push({
        pathname: '/mapPage',
        query: { type: type },
      });
      console.log(`Clicked on tile ${index}, but options modal is not triggered.`);
    }
  };

  const handleOptionSelect = (option) => {
    // Handle the selected option here, e.g., navigate to a new page
    console.log(`Selected option: ${option}`);
    const selectedType = option
    router.push({
      pathname: '/mapPage',
      query: { type: selectedType },
    });

    setModalOpen(false);
  };

  const getTypeForIndex = (index) => {
    switch (index) {
      case 1:
        return "Evcharging";
      case 2:
        return "fuel";
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

  const getOptionsForIndex = (index) => {
    switch (index) {
      case 1:
        return ["Nearest Charging Station","Ather", "Ola hypercharger", "Other Charging Stations"];
        case 2:
          return ["Nearest Petroleum","HP Petroleum", "Shell", "Bharat Petroleum", "Indian Oil Petroleum", "Jio Petroleum"]
      default:
        return [];
    }
  };

  return (
    <div>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "teal",
          height: "100vh",
          overflowY: "auto",
          '@media (max-width:720px)': {
            backgroundColor: "teal",
            height: '100vh',
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
          {[1, 2, 3, 4, 5, 6].map((item) => {
            const { icon, color } = getIconAndColorForIndex(item);
            const label = getLabelForIndex(item);

            return (
              <Grid item key={item} xs={6}>
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
                  onClick={() => handleTileClick(item)}
                >
                  {icon}
                  {label}
                </Button>
              </Grid>
            );
          })}
        </Grid>

      </Container>

      <OptionsModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        options={selectedTile?.options || []}
        onSelectOption={handleOptionSelect}
      />
    </div>
  );
};

export default WelcomePage;
