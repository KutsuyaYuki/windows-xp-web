import { useContext } from "react";
import { WindowContext } from "../window/WindowContext";
import { QuickLaunchItem } from "./QuicklaunchItem";
import { AppName } from "../apps/AppWindow";

export type TaskbarProps = {
    startButtonPressed: (pressed: boolean | ((o: boolean) => boolean)) => void;
};

export function Taskbar({ startButtonPressed }: TaskbarProps) {
    const windowContext = useContext(WindowContext);
    const handleQuickLaunchItemClick = (item: string) => {
        console.log(`Clicked on ${item}`); // Replace with your desired action
    };

    return (<div className="taskbar">
        <div className="start-button" onMouseDown={() => startButtonPressed(previousState => !previousState)}>
            Start
        </div>
        <div className="quick-launch">
            <QuickLaunchItem icon="desktop.png" classname="show-desktop" alt="Show Desktop" name={AppName.desktop} />
            <QuickLaunchItem icon="explorer.png" classname="show-explorer" alt="Explorer" name={AppName.explorer} />
        </div>
        <div className="taskbar-windows-list">{windowContext.windowItems.map((windowItem, index) => {
            return (<div className="taskbar-window-entry" key={index}>
                <img src="images/icons/explorer.png" className="taskbar-windows-icon" alt="Explorer" width="24" height="24" />
                <span className="taskbar-windows-title">{windowItem.title}</span>
            </div>);
        })}
        </div>
        <div className="clock" id="current-time"></div>
    </div>);
}

export default Taskbar;