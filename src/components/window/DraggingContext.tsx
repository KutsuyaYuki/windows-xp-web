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
        setDragPos({ x: event.clientX, y: event.clientY });

        const dx = dragPos.x - startPos.x;
        const dy = dragPos.y - startPos.y;

        if (isDragging != undefined && isDragging.current != undefined){
            const cssProps = isDragging.current.style;
            const left = typeof cssProps.left == 'number' ? cssProps.left : parseInt(cssProps.left || "0");
            const top = typeof cssProps.top == 'number' ? cssProps.top : parseInt(cssProps.top || "0");
            cssProps.left = left + dx + "px";
            cssProps.top = top + dy + "px";
            //return ({ left: left + dx, top: top + dy });
        }

        setStartPos(dragPos);
    };

    return (
        <DraggingContext.Provider value={{setIsDragging, setStartPos, setDragPos}}>
            <div onMouseMove={handleMouseMove}>
                {children}
            </div>
        </DraggingContext.Provider>
    );
}