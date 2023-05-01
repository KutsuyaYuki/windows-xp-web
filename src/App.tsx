import React, { useState } from 'react';
import './style.scss';

import TitlebarWindow from './components/window/TitlebarWindow';
import Taskbar from './components/taskbar/Taskbar';
import StartMenu from './components/taskbar/StartMenu';

function App() {
  const [showStartMenu, setShowStartMenu] = useState(false);
  return (
    <div>
      <TitlebarWindow>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            style={{ width: '25px', height: '25px' }}
            src="//i.imgur.com/rJnYQnG.png"
            alt=""
          />
          <p>　Cats are evil, but cute</p>
        </div>
        <div className="window_ok_button">
          <section className="field-row" style={{ justifyContent: 'flex-end' }}>
            <button aria-label="OK">OK</button>
          </section>
        </div>
      </TitlebarWindow>

      <TitlebarWindow>meow</TitlebarWindow>

      <Taskbar startButtonPressed={setShowStartMenu} />

      {showStartMenu && <StartMenu />}
    </div>
  );
}

export default App;
