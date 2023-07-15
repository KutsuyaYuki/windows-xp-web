import { ExplorerWindow } from "./explorer/ExplorerWindow";

export enum AppName {
    desktop,
    explorer
}

export type AppWindowProps = {
    appName: AppName;
}

export function AppWindow( {appName} : AppWindowProps ):JSX.Element{
    switch (appName) {
        case AppName.explorer:
            
            return (<ExplorerWindow></ExplorerWindow>);
    
        default:
            return (<></>);
    }
}