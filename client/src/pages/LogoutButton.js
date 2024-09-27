import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const LogoutButton = () => {
  const { logout } = useContext(AuthContext); // Access the logout function from context

  return (
    <button onClick={logout}>Logout</button>
  );
};

export default LogoutButton;
