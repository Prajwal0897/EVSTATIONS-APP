// components/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div style={{height:'100%'}}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
