
import React from 'react';
import styles from '../../styles/global.css';
import DisplayAnimals from '../../components/DisplayAnimals/DisplayAnimals.js'

const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.headline}>Choose the animal that interests you!</h1>
      <h1 className={styles.headline}>As soon as you click on it, a tab will open for you</h1>
        <DisplayAnimals/>
    </div>
  );
};

export default Home;



// import React, { useState, useContext } from 'react';
// import { AuthContext } from '../../context/AuthContext';
// import styles from '../../styles/global.css';

// const LoginPage = () => {
//   const { login } = useContext(AuthContext); // Access login function from context
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // Simulate fetching user data from an API
//     const fakeUserData = { email, token: 'fake-jwt-token' };

//     // Call the login function from context
//     login(fakeUserData);
//   };

//   return (
//     <div className={styles.loginContainer}>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin} className={styles.loginForm}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
