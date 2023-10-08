import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null); // For error handling

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://doctalk-r977.onrender.com//users/sign_in',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: {
              email: formData.email,
              password: formData.password,
            },
          }),
        }
      );

      if (response.ok) {
        const token = response.headers.get('Authorization');
        if (token) {
          // Store the token securely (consider using HttpOnly cookies)
          localStorage.setItem('token', token);

          // Redirect to the user's dashboard or main app page
          navigate('/doctors'); // Adjust the route as needed
        } else {
          setError('Authentication failed. Please try again.');
        }
      } else {
        // Handle signup error based on the response from the server
        const errorData = await response.json(); // Parse error response
        setError(errorData.message); // Set the error message received from the server
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  const handleInputChange = e => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Sign In with Email and Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        {error && <p className='error'>{error}</p>}{' '}
        {/* Display error message */}
        <button type='submit'>Sign In</button>
      </form>
    </div>
  );
}
