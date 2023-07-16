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
    const {openWindow} = useContext(WindowContext);
    function onClicked(){
        openWindow({
            id: uuidv4(),
            content: (<AppWindow appName={name}></AppWindow>),
            isError: false,
            title: alt,
        })
    }
    return (
        <button className="desktop-icon-button" onClick={(e)=> onClicked()}>
        <img src={`images/icons/${icon}`} className={classname} alt={alt} width="24" height="24" />
      </button>
    );
}

