import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Form from './views/form/form'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicPage />}>
        </Route>
        <Route path="/form" element={<Form />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

function PublicPage () {
  return <h3>Public</h3>
}