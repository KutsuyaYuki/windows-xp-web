import React from "react";
import ResizableWindow from "./ResizableWindow";
import TitlebarWindow from "./TitlebarWindow";

export type ErrorWindowProps = { children: React.ReactNode; };

export function ErrorWindow({ children }: ErrorWindowProps) {
    return (
        <TitlebarWindow>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            style={{ width: '25px', height: '25px' }}
            src="//i.imgur.com/rJnYQnG.png"
            alt=""
          />
          {children}
        </div>
        <div className="window_ok_button">
          <section className="field-row" style={{ justifyContent: 'flex-end' }}>
            <button aria-label="OK">OK</button>
          </section>
        </div>
      </TitlebarWindow>
    );
}

export default ErrorWindow;