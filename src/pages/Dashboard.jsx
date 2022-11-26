import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Layout from './Layout';

const Dashboard = () => {
  const { token } = useSelector((state) => state.auth);
  const { me } = useSelector((state) => state.auth);
  console.log(me);
  console.log(localStorage.getItem('token'));

  
  // const getMe = () => {
  //   const token = localStorage.getItem('token')
  //   axios.get
  // }
  
  return (
    <Layout>
      <h1>hai ini dashboard {token}</h1>
    </Layout>
  );
};

export default Dashboard;
