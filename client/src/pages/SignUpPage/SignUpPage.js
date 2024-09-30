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

