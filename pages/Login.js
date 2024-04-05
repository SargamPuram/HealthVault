import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // For demonstration purposes, we'll assume a simple authentication with hardcoded credentials
    if (username === 'admin' && password === 'password') {
      // If authentication succeeds, call the onLogin callback passed from the parent component
      onLogin(username);
    } else {
      // If authentication fails, display an error message
      setError('Invalid username or password');
    }
  };

  const handleSignUp = () => {
    // Redirect to the signup page
    history.push('/SignUp');
  };

  const handleNotFound = () => {
    // Redirect to the 404 page not found
    history.push('/NotFound');
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignUp}>Sign Up</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default Login;
