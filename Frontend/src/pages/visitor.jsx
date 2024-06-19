import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { v4 as uuidv4 } from 'uuid';
import Navbar from '../components/Navbar';

const Visitor = () => {
  const generateFormUrl = () => `http://localhost:3000/visitor-form?uid=${uuidv4()}`;

  const [formUrl, setFormUrl] = useState(generateFormUrl());

  const handleQrCodeScan = () => {
    setFormUrl(generateFormUrl());
  };

  useEffect(() => {
    // If you have a way to detect QR code scan event, you can trigger handleQrCodeScan here
    // For example, you can use a WebSocket connection to listen for scan events
  }, []);

  return (
    <div>
      <Navbar />
      <div className="visitor-container">
        <h1>NIRMALA Heights</h1>
        
        <div className="qr-code" style={{ textAlign: 'center', marginTop: '50px' }}>
          <QRCode value={formUrl} size={256} />
          <p>Scan the QR code to sign in</p>
          
        </div>
      </div>
    </div>
  );
};

export default Visitor;
