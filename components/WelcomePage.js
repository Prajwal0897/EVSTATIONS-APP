// components/WelcomePage.js
import React, { useState } from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import Link from 'next/link';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const WelcomePage = () => {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <Container maxWidth="md" sx={{ marginTop: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the EV Charging App!
      </Typography>
      <Typography variant="body1" >
        Explore nearby EV charging stations at just one simple step. Find Stations below!
      </Typography>

      {/* Use Grid to center the button */}
      <Grid container justifyContent="center" alignItems="center" sx={{ height: '50vh', marginTop: 2 }}>
        <Grid item>
          {/* Add a clickable tile to go to ChargingMap component */}
          <Link href="/mapPage">
          <Button variant="outlined" color='success' sx={{ height: '30vh', width: '30vh' }}>
            <FlashOnIcon />
              Find Stations
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
