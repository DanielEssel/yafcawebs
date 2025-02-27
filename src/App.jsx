import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the Navbar component
import Home from './components/Home'; // Import the Home component
import Donate from './components/Donate'; // Import the Donate component
import JoinUs from './pages/JoinUs'; // Import the JoinUs component
import Footer from './components/Footer'; // Import the Footer component

function App() {
  return (
    <Router>
      <Navbar /> {/* This will render the navigation bar on every page */}
      <Routes>
        {/* Define the routes for your components */}
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/donate" element={<Donate />} /> {/* Donate route */}
        <Route path="/joinus" element={<JoinUs />} /> {/* JoinUs route */}
      </Routes>
      <Footer /> {/* This will render the footer on every page */}
    </Router>
  );
}

export default App;
