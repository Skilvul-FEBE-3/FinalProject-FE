import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomeComp = () => {
  const navigate = useNavigate();
  
  const [user, setUser] = useState([]);
  const [role, setRole] = useState('');

  useEffect(() => {
    getMe();
  }, []);

  const getMe = async () => {
    let users = await axios.post(
      'https://finalproject-be-production.up.railway.app/auth/me',
      {
        token: localStorage.getItem('token'),
      },
      { withCredentials: true }
    );
    setUser(users);
    setRole(users.data.role);
  };

  if (!user) {
    navigate('/login');
  }

  if (role == 'admin') {
    navigate('/admin/dashboard');
  }

  if (role == 'user') {
    navigate('/dashboard');
  }
};

export default HomeComp;
