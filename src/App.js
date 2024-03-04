import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Institute from './components/Institute';
import Instructor from './components/Instructor';
import './App.css';
import Department from './components/Department';
import Rooms from './components/Rooms';
import Course from './components/Course';
function App() {
  return (
    <Router>
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/institute" element={<Institute />} />
        <Route path="/department" element={<Department />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path='/course' element={<Course/>}/>
        
       </Routes>
      </div>
    </Router>
  );
}

export default App;

