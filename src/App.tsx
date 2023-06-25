import React, { useState } from 'react';
import './style.scss';

import TitlebarWindow from './components/window/TitlebarWindow';
import Taskbar from './components/taskbar/Taskbar';
import StartMenu from './components/taskbar/StartMenu';
import ErrorWindow from './components/window/ErrorWindow';
import { DraggingContext, DraggingContextProvider } from './components/window/DraggingContext';
import { WindowItem } from './models/windowItem';

function App() {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [windowItems, setWindows] = useState<WindowItem[]>([
    {
      title: 'Test',
      content: (<div>Test</div>),
      isError: false,
    },
    {
      title: 'Anger',
      content: (<div>Test</div>),
      isError: true,
    }
  ]);

  return (
    <DraggingContextProvider>
      <div>
        {windowItems.map((window, index) => {
          if (window.isError) {
            return (<ErrorWindow title={window.title} key={index}>{window.content}</ErrorWindow>)
          }
          return (
            <TitlebarWindow
            title={window.title}
              key={index}>
              {window.content}
            </TitlebarWindow>
          );
        })}

        <Taskbar startButtonPressed={setShowStartMenu} windowItems={windowItems} />

        {showStartMenu && <StartMenu />}
      </div>
    </DraggingContextProvider>
  );
}

export default App;
