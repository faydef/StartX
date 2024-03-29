import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Form from './views/form/form'
import User from './views/newUser/user';
import NavBar from './components/navBar/navBar';
import Interview from './views/interview/interview';
import Login from './views/login/login';
import Schedule from './views/calandar/schedule';
import Candidate from './views/candidate/candidate';

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Login />}>
          </Route>
          <Route path="/form" element={<Form />}>
          </Route>
          <Route path="/user" element={<User />}>
          </Route>
          <Route path="/interview" element={<Interview />}>
          </Route>
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/schedule" element={<Schedule />}>
          </Route>
          <Route path="/candidate" element={<Candidate />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
