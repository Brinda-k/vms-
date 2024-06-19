import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />

      <h1 className='title'>Visitor Management System</h1>

      <div style={{backgroundColor:'#002F69',height:'20px',marginTop:'180px'}}></div>
      <div className="section white-section" style={{ marginLeft: '100px', marginTop: '200px' }}>
        <h2 className="text1" style={{marginTop:'100px'}}>Login/Signup for</h2>
        <i className="fas fa-arrow-circle-right" style={{marginTop:'90px',fontSize:'50px',marginLeft:'150px'}}></i>
      </div>

      <Link to={"/Register"}>
      <div className="section blue-section1">
      <FontAwesomeIcon icon={faSquarePlus} className="icon" />
        <h2 className="text">Apartments</h2>
      </div></Link>

      <Link to={"/Register"}>
      <div className="section blue-section2">
      <FontAwesomeIcon icon={faSquarePlus} className="icon" />
        <h2 className="text">Workspaces</h2>
      </div></Link>

      <Link to={"/Register"}>
      <div className="section blue-section3">
        <FontAwesomeIcon icon={faSquarePlus} className="icon" />
        <h2 className="text">Colleges</h2>
      </div></Link>

    </div>
  );
};

export default Home;
