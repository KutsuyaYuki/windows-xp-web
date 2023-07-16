import React, { useState } from "react";
import { WindowItem } from "../../models/windowItem";
import { v4 as uuidv4 } from 'uuid';

export type WindowContextProps = {
    windowItems: WindowItem[];
    openWindow: (window: WindowItem) => void;
    closeWindow: (id:string) => void;
};

export const WindowContext = React.createContext<WindowContextProps>({
    windowItems: [],
    openWindow: (window: WindowItem) => {},
    closeWindow: (id:string) => {}
});

export function WindowContextProvider({ children }: { children: React.ReactNode }) {
    const [windowItems, setWindows] = useState<WindowItem[]>([
        
      ]);
    
      function openWindow(window:WindowItem){
        setWindows(currentWindows => [...currentWindows,window])
      }

      function closeWindow(id:string){
        setWindows(currentWindows => [...currentWindows.filter(window => window.id != id)])
      }

    return (
        <WindowContext.Provider value={{windowItems, openWindow, closeWindow}}>
            {children}
        </WindowContext.Provider>
    );
}