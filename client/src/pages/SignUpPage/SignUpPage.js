import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import styles from './SignUpPage.module.css';

const SignUpPage = () => {
  const { login } = useContext(AuthContext);
  const [newUser, setNewUser] = useState({ username: '', email: '', password: '' });

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Simulate a signup request and user data (replace this with actual API call)
    const fakeUserData = { email: newUser.email, username: newUser.username, token: 'fake-jwt-token' };

    // Log the user in automatically after sign-up
    login(fakeUserData);
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.signupContainer}>
      <h2>Create a New Account</h2>
      <form onSubmit={handleSignUp} className={styles.signupForm}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={newUser.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={newUser.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
