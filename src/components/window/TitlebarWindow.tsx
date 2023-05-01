import React from "react";
import DraggableWindow from "./DraggableWindow";

export type TitlebarWindowProps = { children: React.ReactNode; };

export function TitlebarWindow({ children }: TitlebarWindowProps) {
    return (<DraggableWindow windowId="initial-window">
        <div className="title-bar">
            <div className="title-bar-text">Very important message!</div>
            <div className="title-bar-controls">
                <button className="minimize-button" aria-label="Minimize"></button>
                <button className="maximize-button" aria-label="Maximize"></button>
                <button className="close-button" aria-label="Close"></button>
            </div>
        </div>
        <div className="window-body">
            {children}
        </div>
    </DraggableWindow>);
}

export default TitlebarWindow;