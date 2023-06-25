import React from "react";

interface ResizableWindowProps {
    children: React.ReactNode;
    windowId: string;
    style?: React.CSSProperties;
    windowRef: React.Ref<HTMLDivElement>;
}

function ResizableWindow({ children, windowId, style, windowRef }: ResizableWindowProps) {
    return (
        <div 
            ref={windowRef}
            style={style}
            className="window"
            data-window-id={windowId}>
            {children}
        </div>
    );
}

export default ResizableWindow;
