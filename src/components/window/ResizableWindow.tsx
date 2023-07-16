import React from "react";

interface ResizableWindowProps {
    children: React.ReactNode;
    windowId: string;
    style?: React.CSSProperties;
    windowRef: React.Ref<HTMLDivElement>;
}

function ResizableWindow({ children, windowId, style, windowRef }: ResizableWindowProps) {

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    return (
        <div 
            ref={windowRef}
            style={{top: windowHeight/2, left: windowWidth/2, ...style} as React.CSSProperties}
            className="window"
            data-window-id={windowId}>
            {children}
        </div>
    );
}

export default ResizableWindow;
