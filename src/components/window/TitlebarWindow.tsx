import React, { useState } from "react";
import ResizableWindow from "./ResizableWindow";
import { DraggingContext } from "./DraggingContext";

export type TitlebarWindowProps = { 
    children: React.ReactNode; 
    title: string;
};

export function TitlebarWindow({ children, title }: TitlebarWindowProps) {
    const resizableWindowRef = React.useRef<HTMLDivElement>(null);

    const { setIsDragging, setStartPos, setDragPos } = React.useContext(DraggingContext);
    
    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.button !== 0) {
            return;
        }
        
        setDragPos({ x: event.clientX, y: event.clientY });
        setStartPos({ x: event.clientX, y: event.clientY });
        setIsDragging(resizableWindowRef);
    };


    const handleMouseUp = () => {
        setIsDragging(undefined);
    };
    return (<ResizableWindow windowRef={resizableWindowRef} windowId="initial-window">
        <div         
        onSelect={() => false}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className="title-bar" unselectable="on">
            <div className="title-bar-text">{title}</div>
            <div className="title-bar-controls">
                <button className="minimize-button" aria-label="Minimize"></button>
                <button className="maximize-button" aria-label="Maximize"></button>
                <button className="close-button" aria-label="Close"></button>
            </div>
        </div>
        <div className="window-body">
            {children}
        </div>
    </ResizableWindow>);
}

export default TitlebarWindow;