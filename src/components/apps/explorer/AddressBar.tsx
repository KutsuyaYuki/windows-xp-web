// src/components/apps/explorer/AddressBar.tsx
import React, { useState } from 'react';
import './AddressBar.scss';

export function AddressBar() {
  const [address, setAddress] = useState('');

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleGoClick = () => {
    // Handle the "Go" button click event
    console.log(`Navigating to ${address}`);
  };

  return (
    <div className="address-bar">
  <div className="address-bar-controls">
    <button className="back-button">
      <i className="fas fa-arrow-left"></i>
    </button>
    <button className="forward-button">
      <i className="fas fa-arrow-right"></i>
    </button>
    <button className="search-button">
      <i className="fas fa-search"></i>
    </button>
  </div>
  <div className="address-bar-input">
    <input
      type="text"
      className="address-input"
      value={address}
      onChange={handleAddressChange}
      placeholder="Enter address"
    />
    <button className="go-button" onClick={handleGoClick}>
      Go
    </button>
  </div>
</div>
  );
}
