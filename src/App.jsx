import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from '/src/pages/Home.jsx'
import RoleRegistration from '/src/pages/RoleRegistration.jsx'

// const Home = () => <h1>Home Page</h1>;
// const RoleRegistration = () => <h1>Role Registration Page</h1>;

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/role-registration" element={<RoleRegistration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
