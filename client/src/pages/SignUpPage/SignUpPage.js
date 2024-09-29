import { useState } from 'react';
import styles from './SignUpPage.module.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import SignUpSuccessMessage from '../../components/SignUpSuccessMessage/SignUpSuccessMessage';

const SignUp = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [name, setName] = useState('');

  // Handle successful sign-up
  const handleSignUpSuccess = (name) => {
    setIsSignedUp(true);
    setName(name);
  };

  return (
    <div className={styles.signUp}>
      {isSignedUp ? (
        <SignUpSuccessMessage name={name} />
      ) : (
        <SignUpForm onSignUpSuccess={handleSignUpSuccess} />
      )}
    </div>
  );
};

export default SignUp;


// import React, { useState, useContext } from 'react';
// import { AuthContext } from '../../context/AuthContext';
// import styles from './SignUpPage.module.css';

// const SignUpPage = () => {
//   const { login } = useContext(AuthContext);
//   const [newUser, setNewUser] = useState({
//     name: '',
//     email: '',
//     password: '',
//     phone_number: '',
//     city: '',
//     country: ''
//   });

//   const [successMessage, setSuccessMessage] = useState(''); // State to track success message
//   const [errorMessage, setErrorMessage] = useState(''); // State to track errors

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     setErrorMessage('');

//     try {
//       const response = await fetch('/api/user/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newUser), // Send all the fields to the server
//       });

//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.error || 'Sign up failed');
//       }

//       // Log the user in automatically after sign-up
//       login(data);

//       // Set the success message with the username
//       setSuccessMessage(`Successfully signed up as ${newUser.name}`);
//     } catch (error) {
//       setErrorMessage(error.message);
//     }
//   };

//   const handleChange = (e) => {
//     setNewUser({ ...newUser, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className={styles.signupContainer}>
//       <h2>Create a New Account</h2>
//       <form onSubmit={handleSignUp} className={styles.signupForm}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={newUser.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={newUser.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={newUser.password}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="phone_number"
//           placeholder="Phone Number"
//           value={newUser.phone_number}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="city"
//           placeholder="City"
//           value={newUser.city}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="country"
//           placeholder="Country"
//           value={newUser.country}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Sign Up</button>
//       </form>

//       {errorMessage && (
//         <div className={styles.errorMessage}>
//           <p>{errorMessage}</p>
//         </div>
//       )}
      
//       {successMessage && (
//         <div className={styles.successMessage}>
//           <p>{successMessage}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SignUpPage;