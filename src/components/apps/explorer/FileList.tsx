// src/components/apps/explorer/FileList.tsx
import React from 'react';

export function FileList() {
  return (
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
  );
}
