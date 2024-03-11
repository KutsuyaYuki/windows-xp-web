// src/components/apps/explorer/SidePanel.tsx
import React from 'react';

export function SidePanel() {
  return (
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
        {/* ... */}
      </ul>
    </div>
  );
}
