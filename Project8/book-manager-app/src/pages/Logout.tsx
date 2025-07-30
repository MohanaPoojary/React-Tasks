import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token');

    navigate('/login');
  }, [navigate]);

  return <p className="p-4">Logging out...</p>;
};

export default Logout;
