import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Resgister';

function App() {

  return (
      <Router>
        < Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
             <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
    
  );
}

export default App;
