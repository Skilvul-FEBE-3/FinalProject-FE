import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RequireAdmin = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  
  useEffect(() => {
    const me = JSON.parse(localStorage.getItem('me'));
    getToken();
    if (token == null) {
      navigate('/');
      return alert('anda belum login');
    }
    if (me.role != 'admin') {
      navigate('/');
      return alert('anda bukan admin');
    }
  }, []);

  const getToken = () => {
    setToken(localStorage.getItem('token'));
  };
};

export default RequireAdmin;
