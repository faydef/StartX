import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Form from './views/form/form'
import User from './views/newUser/user';
import NavBar from './components/navBar/navBar';
import Interview from './views/interview/interview';

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<PublicPage />}>
          </Route>
          <Route path="/form" element={<Form />}>
          </Route>
          <Route path="/user" element={<User />}>
          </Route>
          <Route path="/interview" element={<Interview />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

function PublicPage () {
  return <h3>Public</h3>
}