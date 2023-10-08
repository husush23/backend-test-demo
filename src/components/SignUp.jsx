// SignUp.js
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    // Add other signup fields here
  });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // Send a POST request to your signup endpoint with formData
      const response = await fetch('https://doctalk-r977.onrender.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email: formData.email,
            name: formData.name,
            password: formData.password,
            // Add other signup fields here
          },
        }),
      });

      if (response.ok) {
        localStorage.setItem('token', response.headers.get('Authorization'));
        // Handle successful signup (e.g., redirect to login)
        console.log(response);
        navigate('/signin');
      } else {
        // Handle signup error (e.g., display an error message)
        console.log('Unable to fetch');
      }
    } catch (error) {
      console.error('Error:', error);
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
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        {/* Add other signup form fields here */}
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
