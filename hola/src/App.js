import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route  } from 'react-router-dom';

import Navbar from './components/NavBar.js';
import Homepage from './pages/homepage.js';
import AboutUs from './pages/aboutUs.js';
import Donations from './pages/donations.js';
import FAQ from './pages/faq.js';
import Testimonies from './pages/testimonies.js';
import ContactUs from './pages/contactUs.js';
import Footer from './components/footer.js';
import Bachelors from './pages/Bachelors.js';
import Donate from './pages/donate.js';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/bachelors" element={<Bachelors />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function MainContent() {
  return (
    <div>
      <Homepage />
      <AboutUs />
      <FAQ />
      <Testimonies />
      <ContactUs />
    </div>
  );
}

export default App;