// src/components/apps/explorer/ExplorerWindow.tsx
import React from 'react';

export function ExplorerWindow() {
  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">My Documents</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body">
        <div className="menu-bar">
          <div className="menu-item">File</div>
          <div className="menu-item">Edit</div>
          <div className="menu-item">View</div>
          <div className="menu-item">Favorites</div>
          <div className="menu-item">Tools</div>
          <div className="menu-item">Help</div>
        </div>
        <div className="address-bar">
          <div className="address-bar-controls">
            <button className="back-button" aria-label="Back">
              <i className="fas fa-arrow-left"></i>
            </button>
            <button className="forward-button" aria-label="Forward">
              <i className="fas fa-arrow-right"></i>
            </button>
            <button className="search-button" aria-label="Search">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="address-bar-input">
            <input
              type="text"
              className="address-input"
              placeholder="Enter address"
            />
            <button className="go-button">Go</button>
          </div>
        </div>
        <div className="explorer-content">
          <div className="tree-view">
            <ul>
              <li>Desktop</li>
              <li>
                My Documents
                <ul>
                  <li>Bluetooth Exchange Folder</li>
                  <li>Kickoff</li>
                  <li>My Data Sources</li>
                  <li>My Music</li>
                  <li>My Pictures</li>
                  <li>My Videos</li>
                </ul>
              </li>
              {/* Add more folders as needed */}
            </ul>
          </div>
          <div className="file-list">
            <div className="file-item">
              <i className="far fa-file"></i>
              <span>accts.xls</span>
            </div>
            <div className="file-item">
              <i className="far fa-file"></i>
              <span>AutoCorrect Backup Doc...</span>
            </div>
            {/* Add more file items as needed */}
          </div>
        </div>
      </div>
      <div className="status-bar">
        <div className="status-bar-field">6.53 MB</div>
        <div className="status-bar-field">My Computer</div>
      </div>
    </div>
  );
}
