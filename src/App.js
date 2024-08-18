import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home'; 
import About from './pages/About'; 
import Contact from './pages/Contact'; 
import Login from './pages/Login';
import Register from './pages/Register';
import Tasks from './pages/Tasks';  // Import Tasks component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          Header
          <div className="header-buttons">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/tasks">Tasks</Link>  {/* Add link to tasks */}
          </div>
        </div>
        <div className="container">
          <aside className="sidebar">sidebar</aside>
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/tasks" element={<Tasks />} /> {/* Add route for tasks */}
            </Routes>
          </main>
        
        </div>
        <div className="footer">Footer</div>
      </div>
    </Router>
  );
}

export default App;
