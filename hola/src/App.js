import React from 'react';
import './App.css';

import Navbar from './components/NavBar.js';
import Homepage from './pages/homepage.js';
import AboutUs from './pages/aboutUs.js';

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <AboutUs/>
    </div>
  );
}

export default App;
