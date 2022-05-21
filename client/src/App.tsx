import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Form from './views/form/form'
import User from './views/newUser/user';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicPage />}>
        </Route>
        <Route path="/form" element={<Form />}>
        </Route>
        <Route path="/user" element={<User />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

function PublicPage () {
  return <h3>Public</h3>
}