import React from 'react';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="mt-24 px-10">
      {children}  
      </div>
    </React.Fragment>
  );
};

export default Layout;
