import React from 'react';

const RequireLogin = () => {
  console.log(localStorage.getItem('token'));
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  console.log('halo tes user disini');

  return alert('anda belum login')
};

export default RequireLogin;
