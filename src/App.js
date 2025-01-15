import React, { useState } from 'react';
import './app.css';
import Layout from './ui layout/Layout';
import Login from './user login/Login';  // Import your Login component

const App = () => {
  // State to manage login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulate a login (in a real app, this would come from authentication)
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="app-container">
      {isLoggedIn ? (
        // If the user is logged in, show the Layout component
        <Layout />
      ) : (
        // If the user is not logged in, show the Login component
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
