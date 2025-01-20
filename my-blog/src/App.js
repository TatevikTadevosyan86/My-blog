import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; 

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NavBar from './NavBar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <header>
        <div className="logo-container">
          <img
            src="./project-images/logo1.jpg" // Change this to your logo path
            alt="Logo"
            className="logo"
          />
        </div>
        <NavBar/>
      </header>
      
      <main>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/about' element ={<AboutMe/>}/>
          <Route path='/portfolio' element ={<Portfolio/>}/>
          <Route path='/contact' element ={<Contact/>}/>
        </Routes>
      </main>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
