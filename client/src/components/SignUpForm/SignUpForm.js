import { useState } from 'react';
import styles from './SignUpForm.module.css';

const cities = ['Tel Aviv', 'Jerusalem', 'Haifa', 'Beer Sheva', 'Eilat'];
const countries = ['Israel'];

const SignUpForm = ({ onSignUpSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setError('');

    if (!name || !email || !password || !phoneNumber || !city || !country) {
      setError('All fields are required.');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('/api/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, phone_number: phoneNumber, city, country }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        setError(errorText || 'Failed to sign up. Please try again.');
        setLoading(false);
        return;
      }

      const data = await response.json();
      onSignUpSuccess(name); // Pass name to parent component on success
    } catch (err) {
      setError('Unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.signUpForm} onSubmit={handleSignUp}>
      <h3 className={styles.title}>Sign Up</h3>
      <div className={styles.field}>
        <label className={`${!name && isSubmitted ? styles.errorLabel : styles.label}`}>Full Name*</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className={styles.field}>
        <label className={`${!email && isSubmitted ? styles.errorLabel : styles.label}`}>Email*</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className={styles.field}>
        <label className={`${!password && isSubmitted ? styles.errorLabel : styles.label}`}>Password*</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div className={styles.field}>
        <label className={`${!phoneNumber && isSubmitted ? styles.errorLabel : styles.label}`}>Phone Number*</label>
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
      </div>
      <div className={styles.field}>
        <label className={`${!city && isSubmitted ? styles.errorLabel : styles.label}`}>City*</label>
        <select value={city} onChange={(e) => setCity(e.target.value)} required>
          <option value="" disabled>Select your city</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.field}>
        <label className={`${!country && isSubmitted ? styles.errorLabel : styles.label}`}>Country*</label>
        <select value={country} onChange={(e) => setCountry(e.target.value)} required>
          <option value="" disabled>Select your country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      {error && <div className={styles.error}>{error}</div>}
      {loading && <div className={styles.loading}>Signing up... Please wait</div>}
      <div className={styles.submitButton}>
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
};

export default SignUpForm;
