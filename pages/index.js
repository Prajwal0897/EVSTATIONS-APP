// pages/index.js
import React from "react";
import Head from "next/head";
import WelcomePage from "../components/WelcomePage";
import Layout from "../components/Layout";
import ReduxProvider from "../store";

const Home = () => {
  return (
    <ReduxProvider>
        <Layout>
          <WelcomePage />
        </Layout>
    </ReduxProvider>
  );
};

export default Home;
