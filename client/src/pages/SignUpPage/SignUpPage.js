import { useState, useContext } from 'react';
import styles from './SignUpPage.module.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import SignUpSuccessMessage from '../../components/SignUpSuccessMessage/SignUpSuccessMessage';
import { AuthContext } from '../../context/AuthContext';

const SignUp = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [name, setName] = useState('');
  const { login } = useContext(AuthContext);

  // Handle successful sign-up
  const handleSignUpSuccess = (userData) => {
    setIsSignedUp(true);
    setName(userData.name);
    login(userData); // Automatically log in the user
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

