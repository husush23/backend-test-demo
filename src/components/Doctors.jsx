import React from 'react';
import {useEffect, useState} from 'react';
import SignOut from './SignOut';

function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch the list of doctors when the component mounts
    fetch('http://localhost:3000/api/v1/doctors')
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => console.error('Error fetching doctors:', error));
  }, []);

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

export default Doctors;
