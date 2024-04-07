// src/components/apps/explorer/ExplorerWindow.tsx
import React from 'react';

export function ExplorerWindow() {
  return (
      <div className="window-body">
        <div className="menu-bar">
          <div className="menu-item">File</div>
          <div className="menu-item">Edit</div>
          <div className="menu-item">View</div>
          <div className="menu-item">Favorites</div>
          <div className="menu-item">Tools</div>
          <div className="menu-item">Help</div>
        </div>
        <div className="title-bar-text">My Documents</div>
        <div className="address-bar">
          <div className="address-bar-input">
            <input
              type="text"
              className="address-input"
              placeholder="Enter address"
            />
          </div>
          <button className="go-button">Go</button>
        </div>
        <div className="explorer-content">
          <div className="tree-view">
            <ul>
              <li>
                <i className="fas fa-circle"></i> Desktop
              </li>
              <li>
                <i className="fas fa-circle"></i> My Documents
                <ul>
                  <li>
                    <i className="fas fa-circle-notch"></i> Bluetooth Exchange
                    Folder
                  </li>
                  <li>
                    <i className="fas fa-circle-notch"></i> Kickoff
                  </li>
                  <li>
                    <i className="fas fa-circle-notch"></i> My Data Sources
                  </li>
                  <li>
                    <i className="fas fa-circle-notch"></i> My Music
                  </li>
                  <li>
                    <i className="fas fa-circle-notch"></i> My Pictures
                  </li>
                  <li>
                    <i className="fas fa-circle-notch"></i> My Videos
                  </li>
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
      <div className="status-bar">
        <div className="status-bar-field">6.53 MB</div>
        <div className="status-bar-field">My Computer</div>
      </div>
    </div>
  );
}
