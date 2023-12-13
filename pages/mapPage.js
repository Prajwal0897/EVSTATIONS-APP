// components/ChargingMap.js
import React from 'react';
import Layout from '../components/Layout';
import { Container, Typography, Button } from '@mui/material';
import Link from 'next/link';

const ChargingMap = () => {

  return (
    <Layout>
        <Link href="/">
          <Button variant="outlined" color='warning' sx={{ marginTop: 2, marginLeft: 2 }}>
            Home
          </Button>
        </Link>
        
    <Container maxWidth="lg" sx={{ marginTop: 2, height: '60vh' }}>
      <iframe
        src="https://map.openchargemap.io/?mode=embedded"
        allow="geolocation"
        frameBorder="0"
        width="100%"
        height="100%"
      ></iframe>
    </Container>
    
      </Layout>
  );
};

export default ChargingMap;
