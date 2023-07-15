import React from "react";
import TitlebarWindow from "./TitlebarWindow";

export type ErrorWindowProps = {
  windowId: string;
  children: React.ReactNode; 
  title: string;
};

export function ErrorWindow({ windowId, children, title }: ErrorWindowProps) {
    return (
        <TitlebarWindow windowId={windowId} title={title}>
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