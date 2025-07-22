import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact';
import About from './pages/About';
import User from './pages/User';
const App = () => {
  return (
    <div>
      <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/user/mohan">Use: Mohan</Link></li>
      </ul>
      </nav>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/user/:username' element={<User/>}/>
        </Routes>
      </div>
    </div>
  );
} 

export default App;
