import React, { useContext, useEffect } from "react";
import { WindowContext } from "../window/WindowContext";
import { v4 as uuidv4 } from 'uuid';
import { AppName, AppWindow } from "../apps/AppWindow";
import { DraggingContext } from "../window/DraggingContext";
import { Box, boxesIntersect } from "@air/react-drag-to-select";

export type DesktopIconProps = {
    icon: string;
    classname: string;
    alt: string;
    name: AppName;
};

export function DesktopIcon({ icon, classname, alt, name }: DesktopIconProps) {
    const { openWindow } = useContext(WindowContext);
    const {setDisableDrag, selection} = useContext(DraggingContext);
    const buttonRef = React.useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const boundingClientRect = buttonRef.current?.getBoundingClientRect();
        const item: Box = {
            
            top: boundingClientRect?.top ?? 0,
            left: boundingClientRect?.left ?? 0,
            width: buttonRef.current?.offsetWidth ?? 0,
            height: buttonRef.current?.offsetHeight ?? 0,

        };
        if(selection && boxesIntersect(selection,item)) {
            buttonRef.current!.classList.add("desktop-icon-selected");
        } 
        else {
            buttonRef.current!.classList.remove("desktop-icon-selected");
        }
    },[selection]);

    function onClicked() {
        // Hacky fix because the onDragStop event is not fired when the user double clicks on the icon
        setDisableDrag?.(false);
        openWindow({
            id: uuidv4(),
            content: (<AppWindow appName={name}></AppWindow>),
            isError: false,
            title: alt,
        })
    }
    return (
        <div className="desktop-icon-button" onDoubleClick={(e) => onClicked()} ref={buttonRef}>
            <div className="desktop-icon-image">
                <img src={`images/icons/${icon}`} className={classname} alt={alt} width="32" height="32" />
            </div>
            <div className="desktop-icon-text">{alt}</div>
        </div>
    );
}

