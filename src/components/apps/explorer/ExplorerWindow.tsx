// src/components/apps/explorer/ExplorerWindow.tsx
import { MenuItem } from "../../../models/menuItem";
import { TopLevelMenu } from "../../window/menu/TopLevelMenu";
import "./ExplorerWindow.scss";

import React from "react";

export function ExplorerWindow() {
  const menu: MenuItem[] = [
    {
      name: "File",
      children: [{ name: "New" }, { name: "Open" }, { name: "Save" }],
    },

    {
      name: "File",
      children: [
        { name: "New" },
        { name: "Open" },
        { name: "Save", children: [{ name: "Save As" }] },
      ],
    },
  ];
  return (
    <>
      <TopLevelMenu menu={menu} />
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
        <div className="status-bar">
          <div className="status-bar-field">6.53 MB</div>
          <div className="status-bar-field">My Computer</div>
        </div>
      </div>
    </>
  );
}
