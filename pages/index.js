// pages/index.js
import React from 'react';
import Head from 'next/head';
import WelcomePage from '../components/WelcomePage';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <div>
      <Head>
        <title>EV Charging App</title>
      </Head>

      <Layout>
        <WelcomePage />
        {/* <ChargingMap /> */}
      </Layout>
    </div>
  );
};

export default Home;
