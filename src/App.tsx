import React, { useState } from 'react';
import './style.scss';
import 'xp.css/dist/XP.css';

import Taskbar from './components/taskbar/Taskbar';
import StartMenu from './components/taskbar/StartMenu';
import { DraggingContextProvider } from './components/window/DraggingContext';
import { WindowContextProvider } from './components/window/WindowContext';
import { ScreenCanvas } from './components/window/ScreenCanvas';

function App() {
  const [showStartMenu, setShowStartMenu] = useState(false);

  return (
    <WindowContextProvider>
      <DraggingContextProvider>
        <div>
          <ScreenCanvas></ScreenCanvas>

          <Taskbar startButtonPressed={setShowStartMenu} />

          {showStartMenu && <StartMenu />}
        </div>
      </DraggingContextProvider>
    </WindowContextProvider>
  );
}

export default App;
