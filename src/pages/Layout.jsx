import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Navbar from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
      {children}  
      </div>
      <div className="h-[100px] sm:h-[300px] flex flex-wrap items-end">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
