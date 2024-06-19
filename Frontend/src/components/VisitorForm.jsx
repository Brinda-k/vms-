// src/components/VisitorForm.jsx
import React, { useState } from 'react';

const VisitorForm = () => {
  const [name, setName] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Name:', name);
    console.log('Reason for Entry:', reason);
  };

  return (
    <div className="visitor-form-container">
      <h2>Visitor Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="reason">Reason for Entry:</label>
          <input
            type="text"
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VisitorForm;
