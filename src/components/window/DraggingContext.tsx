import { SelectionBox, useSelectionContainer } from "@air/react-drag-to-select";
import React, { useState } from "react";

export type DraggingContextProps = {
  setIsDragging: React.Dispatch<
    React.SetStateAction<React.RefObject<HTMLElement> | undefined>
  >;
  setStartPos: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>;
  setDragPos: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>;
  setDisableDrag?: React.Dispatch<React.SetStateAction<boolean>>;
  selection?: SelectionBox;
};

export const DraggingContext = React.createContext<DraggingContextProps>({
  setIsDragging: () => {},
  setStartPos: () => {},
  setDragPos: () => {},
  setDisableDrag: () => {},
});

export function DraggingContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDragging, setIsDragging] = useState<
    React.RefObject<HTMLElement> | undefined
  >(undefined);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [dragPos, setDragPos] = useState({ x: 0, y: 0 });
  const [disableDrag, setDisableDrag] = useState(false);
  const [selection, setSelection] = useState<SelectionBox | undefined>();
  const { DragSelection } = useSelectionContainer({
    isEnabled: !isDragging && !disableDrag,
    onSelectionChange: (box) => {
      setSelection(box);
    },
  });

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

      // Calculate the new position
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

      // Apply the new position
      element.style.left = `${newLeft}px`;
      element.style.top = `${newTop}px`;
    }

    // Update the current position
    setDragPos({ x: dragPosX, y: dragPosY });
    setStartPos({ x: dragPosX, y: dragPosY });
  };

  const handleMouseUp = () => {
    setIsDragging(undefined);
  };

  return (
    <DraggingContext.Provider
      value={{ setIsDragging, setStartPos, setDragPos, setDisableDrag, selection: selection }}
    >
      <DragSelection />
      <div
        className="dragSpace"
        onMouseMoveCapture={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {children}
      </div>
    </DraggingContext.Provider>
  );
}
