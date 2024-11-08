import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './Navbar'
import './App.css';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact />
          
          {/* <Route path="/services" element={<services />} />
          <Route path="/products" element={<products />} />
          <Route path="/signUp" element={<signUp />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
