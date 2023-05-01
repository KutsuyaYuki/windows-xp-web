import React, { useState } from "react";

interface DraggableWindowProps {
    children: React.ReactNode;
    windowId: string;
}

function DraggableWindow({ children, windowId }: DraggableWindowProps) {
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const [dragPos, setDragPos] = useState({ x: 0, y: 0 });
    const [windowStyle, setWindowStyle] = useState({ left: 0, top: 0 } as React.CSSProperties);

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.button !== 0) {
            return;
        }
        setIsDragging(true);
        setStartPos({ x: event.clientX, y: event.clientY });
        setDragPos({ x: event.clientX, y: event.clientY });
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) {
            return;
        }
        setDragPos({ x: event.clientX, y: event.clientY });

        const dx = dragPos.x - startPos.x;
        const dy = dragPos.y - startPos.y;

        setWindowStyle((cssProps) => {
            const left = typeof cssProps.left == 'number' ? cssProps.left : parseInt(cssProps.left || "0");
            const top = typeof cssProps.top == 'number' ? cssProps.top : parseInt(cssProps.top || "0");
            return ({ left: left + dx, top: top + dy });
        });

        setStartPos(dragPos);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div
            className="window"
            data-window-id={windowId}
            style={windowStyle}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            {children}
        </div>
    );
}

export default DraggableWindow;
