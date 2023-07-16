import React, { useContext } from "react";
import { WindowContext } from "../window/WindowContext";
import { v4 as uuidv4 } from 'uuid';
import { AppName, AppWindow } from "../apps/AppWindow";

export type DesktopIconProps = {
    icon: string;
    classname: string;
    alt: string;
    name: AppName;
};

export function DesktopIcon({ icon, classname, alt, name }: DesktopIconProps) {
    const { openWindow } = useContext(WindowContext);
    function onClicked() {
        openWindow({
            id: uuidv4(),
            content: (<AppWindow appName={name}></AppWindow>),
            isError: false,
            title: alt,
        })
    }
    return (
        <div className="desktop-icon-button" onDoubleClick={(e) => onClicked()}>
            <div className="desktop-icon-image">
                <img src={`images/icons/${icon}`} className={classname} alt={alt} width="32" height="32" />
            </div>
            <div className="desktop-icon-text">{alt}</div>
        </div>
    );
}

