import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NavBar from './components/Navbar';

const App = () => {
  return (
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element= {<Login/>} />
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/dashboard" element = {<Dashboard/>}/>
        </Routes>
      </div>
    
  );
}

export default App;
