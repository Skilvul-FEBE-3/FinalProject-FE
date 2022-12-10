import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
