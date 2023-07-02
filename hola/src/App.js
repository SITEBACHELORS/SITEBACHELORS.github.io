import React from 'react';
import './App.css';

import Navbar from './components/NavBar.js';
import Homepage from './pages/homepage.js';
import AboutUs from './pages/aboutUs.js';
import Donations from './pages/donations.js';
import FAQ from './pages/faq.js';
import Testimonies from './pages/testimonies.js';
import ContactUs from './pages/contactUs.js';
import Footer from './components/footer.js';

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <AboutUs/>
      <Donations/>
      <FAQ/>
      <Testimonies/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
