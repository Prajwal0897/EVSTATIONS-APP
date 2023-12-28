// pages/index.js
import React from 'react';
import Head from 'next/head';
import WelcomePage from '../components/WelcomePage';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <div>
      <Layout>
        <WelcomePage />
      </Layout>
    </div>
  );
};

export default Home;
