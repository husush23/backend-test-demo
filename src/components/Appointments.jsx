import React from 'react';
import {useEffect, useState} from 'react';
import SignOut from './SignOut';

function Appointments() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');

    // Check if the token is available
    if (token) {
      // Create headers with the Authorization header
      const headers = {
        Authorization: `${token}`,
      };

      // Fetch the list of doctors with the Authorization header
      fetch('https://doctalk-r977.onrender.com/api/v1/appointments', {
        headers,
      })
        .then(response => response.json())
        .then(data => setDoctors(data))
        .catch(error => console.error('Error fetching doctors:', error));
    } else {
      // Handle the case where the token is not available, e.g., redirect to login
      console.error('Token not found in localStorage');
    }
  }, []);

  console.log(doctors);

  return (
    <div>
      <h2>List of Doctors</h2>
      <ul>
        {doctors.map(doctor => (
          <li key={doctor.id}>{doctor.doc_name}</li>
        ))}
      </ul>
      <SignOut />
    </div>
  );
}

export default Appointments;
