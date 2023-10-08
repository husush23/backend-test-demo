import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Doctors from './components/Doctors';
import Root from './components/Root';
import Appointments from './components/Appointments';

// Custom PrivateRoute component to protect routes
function PrivateRoute({element}) {
  const isAuthenticated = localStorage.getItem('token'); // Check if auth token exists
  return isAuthenticated ? element : <Navigate to='/signin' replace />;
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Root />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/doctors' element={<PrivateRoute element={<Doctors />} />} />
      <Route
        path='/appointments'
        element={<PrivateRoute element={<Appointments />} />}
      />
    </Routes>
  );
}

export default App;
