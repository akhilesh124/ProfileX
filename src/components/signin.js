import React, { useState } from 'react';
import axios from 'axios';
import styles from '../style/SignIn.css'; // Import CSS Module

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setSuccess('');
    setError('');
    
    // Simple client-side validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/signin', { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setSuccess('Sign in successful!');
      setIsLoading(false);
      // Redirect or navigate to another page
      window.location.href = '/dashboard'; // Example redirect
    } catch (error) {
      setIsLoading(false);
      setError('Invalid credentials');
    }
  };

  return (
    <div className={styles.signinContainer}>
      <div className={styles.signinForm}>
        <h2>Sign In</h2>
        {success && <p className={styles.success}>{success}</p>}
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? (
              <div className={styles.spinner}></div>
            ) : (
              'Sign In'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
