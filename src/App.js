// App.js
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Doctors from './components/Doctors';
import Root from './components/Root';
import Appointments from './components/Appointments';

function App() {
  return (
    <Routes>
      <Route>
        <Route path='/' element={<Root />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/appointments' element={<Appointments />} />
      </Route>
    </Routes>
  );
}

export default App;
