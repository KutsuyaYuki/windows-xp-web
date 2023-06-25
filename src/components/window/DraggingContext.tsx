import React, { useState } from "react";

export type DraggingContextProps = {
    setIsDragging: React.Dispatch<React.SetStateAction<React.RefObject<HTMLElement> | undefined>>;
    setStartPos: React.Dispatch<React.SetStateAction<{ x: number; y: number; }>>;
    setDragPos: React.Dispatch<React.SetStateAction<{ x: number; y: number; }>>;
};

export const DraggingContext = React.createContext<DraggingContextProps>({
    setIsDragging: () => { },
    setStartPos: () => { },
    setDragPos: () => { },
});

export function DraggingContextProvider({ children }: { children: React.ReactNode }) {
    const [isDragging, setIsDragging] = useState<React.RefObject<HTMLElement>|undefined>(undefined);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const [dragPos, setDragPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) {
            return;
        }
    
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
    
        const dragPosX = event.clientX;
        const dragPosY = event.clientY;
    
        const dx = dragPosX - startPos.x;
        const dy = dragPosY - startPos.y;
    
        if (isDragging && isDragging.current) {
            const element = isDragging.current;
            const rect = element.getBoundingClientRect();
    
            let newLeft = rect.left + dx;
            let newTop = rect.top + dy;
    
            // Ensure the new position does not exceed the screen boundaries
            if (newLeft < 0) {
                newLeft = 0;
            } else if (newLeft + rect.width > screenWidth) {
                newLeft = screenWidth - rect.width;
            }
    
            if (newTop < 0) {
                newTop = 0;
            } else if (newTop + rect.height > screenHeight) {
                newTop = screenHeight - rect.height;
            }
    
            element.style.left = `${newLeft}px`;
            element.style.top = `${newTop}px`;
        }
    
        setDragPos({ x: dragPosX, y: dragPosY });
        setStartPos({ x: dragPosX, y: dragPosY });
    };
    
    return (
        <DraggingContext.Provider value={{setIsDragging, setStartPos, setDragPos}}>
            <div onMouseMove={handleMouseMove}>
                {children}
            </div>
        </DraggingContext.Provider>
    );
}