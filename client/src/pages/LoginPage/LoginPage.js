import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const { login } = useContext(AuthContext); // Access login function from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simulate fetching user data from an API
    const fakeUserData = { email, token: 'fake-jwt-token' };

    // Call the login function from context
    login(fakeUserData);
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} className={styles.loginForm}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
