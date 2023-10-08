// SignOut.js
import React from 'react';
import {useNavigate} from 'react-router-dom';

function SignOut() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      // Send a POST request to the sign-out endpoint with the correct URL
      const response = await fetch(
        'https://doctalk-r977.onrender.com//users/sign_out',
        {
          method: 'DELETE', // Use DELETE method for signing out
          headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token'),
          },
        }
      );
      localStorage.removeItem('token');

      if (response.ok) {
        // Handle successful sign-out (e.g., clear authentication tokens or session)
        console.log('Sign-out successful.');

        // Redirect to the login page
        navigate('/');
      } else {
        // Handle sign-out error (e.g., display an error message)
        console.error('Sign-out failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Sign Out</h2>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default SignOut;
