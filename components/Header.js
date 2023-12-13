// components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#222222' }}>
      <Toolbar>
        <Box display="flex" alignItems="center">
          <img
            src="/assets/anida-logo.png"
            alt="Logo"
            style={{ maxWidth: 55, maxHeight:60 ,marginLeft:'10px', marginRight: '16px' }}
          />
          <Typography variant="h6" style={{ color: 'teal' }}>
            Charging Stations at Your Fingertips
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
