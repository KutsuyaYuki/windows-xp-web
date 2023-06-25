import React, { useState } from 'react';
import './style.scss';

import TitlebarWindow from './components/window/TitlebarWindow';
import Taskbar from './components/taskbar/Taskbar';
import StartMenu from './components/taskbar/StartMenu';
import ErrorWindow from './components/window/ErrorWindow';
import { DraggingContext, DraggingContextProvider } from './components/window/DraggingContext';

function App() {
  const [showStartMenu, setShowStartMenu] = useState(false);
  return (
    <DraggingContextProvider>
    <div>
      <ErrorWindow>meow</ErrorWindow>

      <TitlebarWindow>meow</TitlebarWindow>

      <Taskbar startButtonPressed={setShowStartMenu} />

      {showStartMenu && <StartMenu />}
    </div>
    </DraggingContextProvider>
  );
}

export default App;
