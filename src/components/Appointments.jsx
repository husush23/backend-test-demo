import React from 'react';
import {useEffect, useState} from 'react';
import SignOut from './SignOut';

function Appointments() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch the list of doctors when the component mounts
    fetch('https://doctalk-r977.onrender.com/api/v1/appointments')
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => console.error('Error fetching doctors:', error));
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
