// Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#1B3541', padding: '10px', position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <li style={{ display: 'inline', marginRight: '10px' }}><Link to="/" style={{ color: 'white', textDecoration: 'none',marginLeft:'10px' }}>Visitor management system</Link></li>
        <li style={{ display: 'inline', marginRight: '10px',marginLeft:'1000px' }}><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
        <li style={{ display: 'inline', marginRight: '10px' ,marginLeft:'40px'}}><Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>AboutUs</Link></li>
        <li style={{ display: 'inline',marginLeft:'40px' }}><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>ContactUs</Link></li>
        <li style={{ display: 'inline',marginLeft:'40px', marginRight: '10px' }}><Link to="/Services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
